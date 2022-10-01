import { FunctionComponent } from "react";
import { DateTimeDisplayProps } from "./DateTimeDisplay.types";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DateTimeDisplay: FunctionComponent<DateTimeDisplayProps> = ({
  timestamp,
  timezoneOffset,
  displayMode = 'DateTime'
}) => {

  const date = new Date((timestamp + timezoneOffset) * 1000);

  let formattedDate = '';

  switch(displayMode) {
    case 'Date': 
      formattedDate = `${date.getUTCDate()}-${months[date.getUTCMonth()]}, ${date.getUTCFullYear()}`;
      break;
    case 'Time':
      formattedDate = `${date.getUTCHours()}:${date.getUTCMinutes()}`;
      break;
    case 'DateTime':
      formattedDate = `${date.getUTCDate()}-${months[date.getUTCMonth()]}, ${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}`;
  }

  return <p>{formattedDate}</p>

}


export default DateTimeDisplay;