import { FunctionComponent } from "react";
import PrimaryInfoCard from "../../components/PrimaryInfoCard/PrimaryInfoCard";
import SecondaryInfoCard from "../../components/SecondaryInfoCard/SecondaryInfoCard";
import WeatherGlanceCard from "../../components/WeatherGlanceCard/WeatherGlanceCard";
import { StyledCurrentWeatherContainer, StyledDailyForecastContainer, StyledDashboard } from "./Dashboard.styles";


const Dashboard: FunctionComponent = () => {
  return <StyledDashboard>
    <StyledCurrentWeatherContainer>
      <PrimaryInfoCard 
        location={'Hyderabad'} 
        timestamp={1664639523}
        timezoneOffset={19800}
        temperature={24} 
        feelsLikeTemparature={22} 
        temparatureUnit={'C'} 
        iconCode={'09d'} 
        description={'thunderstorm with heavy drizzle'}
      />

      <SecondaryInfoCard data={[
        {label: 'wind', value: '20', units: 'km/h'},
        {label: 'Humidity', value: '95', units: '%'},
        {label: 'Precipitation', value: '33', units: '%'},
        {label: 'Sunrise', value: '6:30', units: 'AM'},
        {label: 'Sunset', value: '6:00', units: 'PM'},
        {label: 'UV Index', value: '5'},
        {label: 'Atmospheric Pressure', value: '18', units: 'bar'}
      ]} />
    </StyledCurrentWeatherContainer>

    <StyledDailyForecastContainer>
        <WeatherGlanceCard date={{
          timestamp: 1664639523,
          timezoneOffset: 19800
        }} iconCode='11n' temperature={{temperature: 32, units: 'C'}} />
        <WeatherGlanceCard date={{
          timestamp: 1664639523,
          timezoneOffset: 19800
        }} iconCode='50d' temperature={{temperature: 12, units: 'C'}} />
        <WeatherGlanceCard date={{
          timestamp: 1664639523,
          timezoneOffset: 19800
        }} iconCode='09d' temperature={{temperature: 24, units: 'C'}} />
        <WeatherGlanceCard date={{
          timestamp: 1664639523,
          timezoneOffset: 19800
        }} iconCode='09d' temperature={{temperature: 24, units: 'C'}} />
        <WeatherGlanceCard date={{
          timestamp: 1664639523,
          timezoneOffset: 19800
        }} iconCode='09d' temperature={{temperature: 24, units: 'C'}} />
        <WeatherGlanceCard date={{
          timestamp: 1664639523,
          timezoneOffset: 19800
        }} iconCode='09d' temperature={{temperature: 24, units: 'C'}} />
    </StyledDailyForecastContainer>
  </StyledDashboard>
}

export default Dashboard;