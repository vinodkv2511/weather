import { FunctionComponent } from "react";
import DateTimeDisplay from "../DateTimeDisplay/DateTimeDisplay";
import TemperatureDisplay from "../TemperatureDisplay/TemperatureDisplay";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { StyledWeatherGlanceCard } from "./WeatherGlanceCard.styles";
import { WeatherGlanceCardProps } from "./WeatherGlanceCard.types";


const WeatherGlanceCard:FunctionComponent<WeatherGlanceCardProps> = (props) => {

  const { date, temperature, iconCode } = props;

  return <StyledWeatherGlanceCard>
      <DateTimeDisplay {...date} displayMode='Date' />
      <WeatherIcon iconId={iconCode} />
      <TemperatureDisplay {...temperature } fontSize={'1.1rem'}/>
  </StyledWeatherGlanceCard>
}

export default WeatherGlanceCard;