export type DateTimeDisplayMode = 'DateTime' | 'Date' | 'Time';

export interface DateTimeDisplayProps {
  timestamp: number,
  timezoneOffset: number,
  displayMode?: DateTimeDisplayMode
}