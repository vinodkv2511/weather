import { FunctionComponent } from "react";
import { DateTimeDisplayProps } from "./DateTimeDisplay.types";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DateTimeDisplay: FunctionComponent<DateTimeDisplayProps> = ({
  timestamp,
  timezoneOffset,
  displayMode = 'DateTime'
}) => {

  const date = new Date((timestamp + timezoneOffset) * 1000);

  const minutes = date.getUTCMinutes() > 9 ? date.getUTCMinutes() : `0${date.getUTCMinutes()}` ;
  const hours24 = date.getUTCHours() > 9 ? date.getUTCHours() : `0${date.getUTCHours()}` ;
  const hours12 = Number(hours24) > 12 ? Number(hours24) - 12 : hours24;
  const morningOrNight = Number(hours24) >= 12 ? 'PM' : 'AM';

  let formattedDate = '';

  switch(displayMode) {
    case 'Date': 
      formattedDate = `${date.getUTCDate()}-${months[date.getUTCMonth()]}, ${date.getUTCFullYear()}`;
      break;
    case 'Time':
      formattedDate = `${hours12}:${minutes}${morningOrNight}`;
      break;
    case 'Time24':
      formattedDate = `${hours24}:${minutes}`;
      break;
    case 'DateTime':
      formattedDate = `${date.getUTCDate()}-${months[date.getUTCMonth()]}, ${date.getUTCFullYear()} ${hours12}:${minutes}${morningOrNight}`;
      break;
    case 'DateTime24':
      formattedDate = `${date.getUTCDate()}-${months[date.getUTCMonth()]}, ${date.getUTCFullYear()} ${hours24}:${minutes}`;
  }

  return <p>{formattedDate}</p>

}


export default DateTimeDisplay;