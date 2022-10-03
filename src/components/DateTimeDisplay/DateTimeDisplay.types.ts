export type DateTimeDisplayMode = 'DateTime' | 'DateTime24' | 'Date' | 'Time' | 'Time24';

export interface DateTimeDisplayProps {
  timestamp: number,
  timezoneOffset: number,
  displayMode?: DateTimeDisplayMode
}