import { TemperatureDisplayProps } from "../TemperatureDisplay/TemperatureDisplay.types";


export interface PrimaryInfoCardProps {
  /** Name of the location */
  location: string,
  /** Time of data calculation in UNIX - UTC format */
  timestamp: number,
  /** Timezone offset in seconds*/
  timezoneOffset: number,
  /** Raw value of temperature */
  temperature: TemperatureDisplayProps['temperature'],
  /** Raw value of human perceived temperature */
  feelsLikeTemparature: TemperatureDisplayProps['temperature'],
  /** Unit of temperature */
  temparatureUnit: TemperatureDisplayProps['units'],
  /** Weather icon code as conforming to openweathermap api */
  iconCode: string,
  /** A description of weather */
  description: string,
}