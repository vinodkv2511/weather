import React, { FunctionComponent, useMemo } from "react";
import DateTimeDisplay from "../DateTimeDisplay/DateTimeDisplay";
import TemperatureDisplay from "../TemperatureDisplay/TemperatureDisplay";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { StyledFeelsLikeDisplay, StyledLocationAndTimeStampContainer, StyledPrimaryInfoCard, StyledTemperatureInfo } from "./PrimaryInfoCard.styles";
import { PrimaryInfoCardProps } from "./PrimaryInfoCard.types";


const PrimaryInfoCard:FunctionComponent<PrimaryInfoCardProps> = (props) => {
  
  const { 
    location,
    timestamp,
    timezoneOffset,
    temperature,
    temparatureUnit,
    feelsLikeTemparature,
    iconCode,
    description 
  } = props;

  const isNight = useMemo(() => {
    return (new Date((timestamp + timezoneOffset) * 1000)).getUTCHours() > 18 ? true : false;
  }, [timestamp, timezoneOffset]) 

  return (
    <StyledPrimaryInfoCard isNight={isNight}>
      <StyledLocationAndTimeStampContainer>
        <p>{location}</p>
        <DateTimeDisplay timestamp={timestamp} timezoneOffset={timezoneOffset} displayMode={'Time'}/>
      </StyledLocationAndTimeStampContainer>
      <WeatherIcon iconId={iconCode}/>
      <StyledTemperatureInfo>
        <TemperatureDisplay temperature={temperature} units={temparatureUnit} fontSize='4rem'/>
        {/* TODO Localize */}
        <StyledFeelsLikeDisplay>Feels like <TemperatureDisplay temperature={feelsLikeTemparature} units={temparatureUnit} fontSize="0.8rem"/></StyledFeelsLikeDisplay>
      </StyledTemperatureInfo>
      <p>{description}</p>

    </StyledPrimaryInfoCard>
  )
}

export default PrimaryInfoCard;