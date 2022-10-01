
export type temperatureUnit = 'F' | 'C' | 'K';

export interface TemperatureDisplayProps {
  temperature: number,
  units: temperatureUnit,
  /**Font size as a css property, defaults to 2rem*/
  fontSize?: string,
}