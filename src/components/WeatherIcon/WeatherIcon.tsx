import { FunctionComponent } from "react";
import { StyledWeatherIcon } from "./WeatherIcon.styles";
import { WeatherIconProps } from "./WeatherIcon.types";


const WeatherIcon: FunctionComponent<WeatherIconProps> = ({iconId, description = 'Weather icon'}) => {
  return <StyledWeatherIcon src={require(`../../assets/WeatherIcons/SVG/${iconId}.svg`)} alt={description}/>
}

export default WeatherIcon;