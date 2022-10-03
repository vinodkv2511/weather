
export interface GeoCodingLocation {
  /**Name of the found location */
  name: string,
  /** Name of the found location in different languages. The list of names can be different for different locations */
  local_names: { [language_code: string]: string },
  /** Geographical coordinates of the found location (latitude) */
  lat: number,
  /** Geographical coordinates of the found location (latitude) */
  lon: number,
  /** Country code of the found location */
  country: string
  /** State of the found location */
  state?: string
}



export type GeoCodingResponse = GeoCodingLocation[];