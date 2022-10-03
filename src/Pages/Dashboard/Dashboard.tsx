import { FunctionComponent } from "react";
import PrimaryInfoCard from "../../components/PrimaryInfoCard/PrimaryInfoCard";
import SecondaryInfoCard from "../../components/SecondaryInfoCard/SecondaryInfoCard";
import { temperatureUnit } from "../../components/TemperatureDisplay/TemperatureDisplay.types";
import WeatherGlanceCard from "../../components/WeatherGlanceCard/WeatherGlanceCard";
import { useAppSelector } from "../../hooks";
import { useGetCurrentAndDailyQuery } from "../../services/weather";
import { selectLocation, selectUnits } from "../../slices/settingsSlice";
import { get12HoursTime, unitsSpeedMap, unitsTempMap } from "../../utils/utils";
import { StyledCurrentWeatherContainer, StyledDailyForecastContainer, StyledDashboard } from "./Dashboard.styles";


const Dashboard: FunctionComponent = () => {

  const units = useAppSelector(selectUnits)
  const selectedLocation = useAppSelector(selectLocation);

  const { data, error, isFetching } = useGetCurrentAndDailyQuery({"lat": selectedLocation?.lat || 0,
  "lon": selectedLocation?.lon || 0, units}, { skip: !selectedLocation});

  if(!selectedLocation) {
    return <p>Please select a location</p>
  }

  if(error) {
    return <p>{`Something went wrong, ${(error as {data: {message: string}}).data?.message}`}</p>
  }

  if(isFetching) {
    return <p>Loading...</p>
  }

  const {
    current,
    timezone_offset,
  } = data!;

  const {
    dt,
    temp,
    feels_like,
    weather,
    wind_speed,
    humidity,
    uvi,
    pressure,
    clouds,
    sunrise,
    sunset
  } = current!;

  const {
    icon,
    description
  } = weather[0];

  const sunriseObj = get12HoursTime(sunrise, timezone_offset);
  const sunsetObj = get12HoursTime(sunset, timezone_offset);


  return <StyledDashboard>
    <StyledCurrentWeatherContainer>
      <PrimaryInfoCard 
        location={selectedLocation.name} 
        timestamp={dt}
        timezoneOffset={timezone_offset}
        temperature={temp} 
        feelsLikeTemparature={feels_like} 
        temparatureUnit={unitsTempMap[units] as temperatureUnit} 
        iconCode={icon} 
        description={description}
      />

      <SecondaryInfoCard data={[
        {label: 'wind', value: `${wind_speed}`, units: unitsSpeedMap[units]},
        {label: 'Humidity', value: `${humidity}`, units: '%'},
        {label: 'Sunrise', value: sunriseObj.timeString, units: sunriseObj.amOrPm},
        {label: 'Sunset', value: sunsetObj.timeString, units: sunsetObj.amOrPm},
        {label: 'UV Index', value: `${uvi}`},
        {label: 'Pressure', value: `${pressure}`, units: 'hPa'},
        {label: 'Clouds', value: `${clouds}`, units: '%'}
      ]} />
    </StyledCurrentWeatherContainer>

    <StyledDailyForecastContainer>
      {
        data?.daily?.map( dataBlock => {
          return <WeatherGlanceCard key={`day-data-${dataBlock.dt}`} date={{
            timestamp: dataBlock.dt,
            timezoneOffset: data?.timezone_offset
          }} iconCode={dataBlock.weather[0].icon} temperature={{temperature: dataBlock.temp.day, units: unitsTempMap[units] as temperatureUnit}} /> 
        })
      }
    </StyledDailyForecastContainer>
  </StyledDashboard>
}

export default Dashboard;