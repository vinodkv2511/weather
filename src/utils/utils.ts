import { Units } from "../services/types";

export const unitsTempMap = {
  [Units.Default]: 'K',
  [Units.Metric]: 'C',
  [Units.Imperial]: 'F'
};

export const unitsSpeedMap = {
  [Units.Default]: 'm/s',
  [Units.Metric]: 'm/s',
  [Units.Imperial]: 'mph'
};


export const get12HoursTime = (timestamp: number, timezoneOffset: number) => {
  const date = new Date((timestamp + timezoneOffset) * 1000);

  const minutes = date.getUTCMinutes() > 9 ? date.getUTCMinutes() : `0${date.getUTCMinutes()}` ;
  const hours24 = date.getUTCHours() > 9 ? date.getUTCHours() : `0${date.getUTCHours()}` ;
  const hours12 = Number(hours24) > 12 ? Number(hours24) - 12 : hours24;
  const morningOrNight = Number(hours24) >= 12 ? 'PM' : 'AM';

  return {
    timeString: `${hours12}:${minutes}`,
    amOrPm: morningOrNight
  }

}