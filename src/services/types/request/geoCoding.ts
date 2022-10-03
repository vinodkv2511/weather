

export interface GeoCodingRequest {
  /** City name, state code (only for the US) and country code divided by comma. Please use ISO 3166 country codes */
  q: string,
  /** Number less than 5 to limit number of locations */
  limit?: number
}