import { FunctionComponent, useState } from "react";
import { StyledHeader, StyledLogo, StyledLogoContainer } from "./Header.styles";
import logo from '../../assets/WeatherIcons/SVG/01d.svg';
import locationIcon from '../../assets/location_pin.svg';
import ComboBox from "../ComboBox/ComboBox";
import { MenuItem } from "../ComboBox/ComboBox.types";


const Header: FunctionComponent = () => {

  const [selectedLocation, setSelectedLocation] = useState<MenuItem>();

  return <StyledHeader>
    <StyledLogoContainer>
      <StyledLogo src={logo} alt='logo' />
      Weather
    </StyledLogoContainer>

    <ComboBox icon={locationIcon} label={'Location'} placeholder={'Search for a location'} options={[{id: '1', value: 'Test'}, {id: '2', value: 'Test2'}, {id: '3', value: 'Test3'}]} onChange={function (value: string): void {
      console.log('On CHANGE ', value);
    } } onSelect={function (value: MenuItem): void {
      console.log('On Select ', value);
      setSelectedLocation(value);
    } } showLoader={false} selectedOption={selectedLocation} />
  </StyledHeader>
}

export default Header;
