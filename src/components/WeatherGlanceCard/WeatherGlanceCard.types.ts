import { DateTimeDisplayProps } from "../DateTimeDisplay/DateTimeDisplay.types";
import { TemperatureDisplayProps } from "../TemperatureDisplay/TemperatureDisplay.types";
import { WeatherIconProps } from "../WeatherIcon/WeatherIcon.types";

export interface WeatherGlanceCardProps {
  temperature: Omit<TemperatureDisplayProps, 'fontSize'>,
  date: Omit<DateTimeDisplayProps, 'displayMode'>,
  iconCode: WeatherIconProps['iconId'],
}