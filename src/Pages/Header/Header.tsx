import { FunctionComponent, useEffect, useMemo, useState } from "react";
import debounce from 'lodash.debounce';
import { StyledHeader, StyledLogo, StyledLogoContainer } from "./Header.styles";
import logo from '../../assets/WeatherIcons/SVG/01d.svg';
import locationIcon from '../../assets/location_pin.svg';
import ComboBox from "../../components/ComboBox/ComboBox";
import { ComboBoxProps } from "../../components/ComboBox/ComboBox.types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useGetLocationQuery, useGetReverseLocationQuery } from "../../services/geoCoding";
import { selectLocation, setLocation } from "../../slices/settingsSlice";


const Header: FunctionComponent = () => {

  const selectedLocation = useAppSelector(selectLocation);
  const dispatch = useAppDispatch();
  const [currentQuery, setCurrentQuery] = useState('');
  const [geoLocationData, setGeoLocationData] = useState<GeolocationCoordinates>();

  const {currentData, isFetching} = useGetLocationQuery({q: currentQuery}, {skip: !currentQuery});
  const { currentData: reverseLocationData, isFetching: isFetchingReverse } = useGetReverseLocationQuery({lat: geoLocationData?.latitude, lon: geoLocationData?.longitude}, {skip: !geoLocationData})

  const handleLocationSearchChange = debounce((value: string) => {
    setCurrentQuery(value);
  }, 250);

  const handleOnSelect: ComboBoxProps['onSelect'] = (option) => {
    const selectedLoc = currentData?.find(loc => `${loc.lat}-${loc.lon}` === option.id );
    if(selectedLoc){
      dispatch(setLocation(selectedLoc));
    }
  }

  const handleGeoLocationSuccess = (position: GeolocationPosition) => {
    console.log('Success ', position.coords);
    setGeoLocationData(position.coords);
  }

  const handleGeoLocationFailure = (error: GeolocationPositionError) => {
    console.log(error);
  }

  const selectedOption = useMemo(() => {
    return selectedLocation && {id: `${selectedLocation.lat}-${selectedLocation.lon}`, value: selectedLocation.name}
  }, [selectedLocation]);


  useEffect(() => {
    if(!selectedLocation && reverseLocationData && reverseLocationData.length > 0) {
      console.log("Reverse location data ", reverseLocationData);
      dispatch(setLocation(reverseLocationData[0]));
    }
  }, [selectedLocation, reverseLocationData, dispatch])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      handleGeoLocationSuccess,
      handleGeoLocationFailure,
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
  }, [])

  return <StyledHeader>
    <StyledLogoContainer>
      <StyledLogo src={logo} alt='logo' />
      Weather
    </StyledLogoContainer>

    <ComboBox 
      icon={locationIcon}
      label={'Location'}
      placeholder={'Search for a location'}
      options={currentData ? currentData?.map(({lat, lon, name}) => ({id: `${lat}-${lon}`, value: name})) : []}
      onChange={handleLocationSearchChange}
      onSelect={handleOnSelect}
      showLoader={isFetching || isFetchingReverse} 
      selectedOption={selectedOption} />
  </StyledHeader>
}

export default Header;
