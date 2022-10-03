/**
 * Exclude some number of data blocks from the API response.
 *
 * This is useful for reducing latency and saving cache space.
 *
 * See {@link https://openweathermap.org/api/one-call-api#how Exclude Data Blocks} for more info.
 */
export enum Exclude {
  Currently = "currently",
  Minutely = "minutely",
  Hourly = "hourly",
  Daily = "daily",
}

/**
 * A list containing all of the [[Exclude]] values.
 *
 * @internal
 */
export const EXCLUDE_ALL = [
  Exclude.Currently,
  Exclude.Minutely,
  Exclude.Hourly,
  Exclude.Daily,
]
