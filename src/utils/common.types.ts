

export type units = 'standard' | 'metric' | 'imperial';

export interface Location {
  name: string,
  lat: number,
  lon: number,
  country: string
}
