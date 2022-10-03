import styled from 'styled-components';
import { colors, tokens } from '../../utils/styleTokens';
import { StyledTemperatureDisplay } from '../TemperatureDisplay/TemperatureDisplay.styles';
import { StyledWeatherIcon } from '../WeatherIcon/WeatherIcon.styles';


export const StyledLocationAndTimeStampContainer = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
  font-size: 0.8rem;

  p:last-child{
    text-align: end;
  }
`;

export const StyledPrimaryInfoCard = styled.div<{isNight: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  box-shadow: 0 0 1rem 0.25rem ${colors.shadow};
  border-radius: ${tokens.borderRadius};
  background: ${ props => props.isNight ? colors.nightBackground : colors.dayBackground};
  width: 15rem;
  flex-grow: 0;
  padding: 1.5rem 0.75rem;
  color: ${colors.white};
  gap: 1.2rem;
  font-size: 0.8rem;

  ${StyledWeatherIcon} {
    aspect-ratio: 1;
    filter: ${props => props.isNight ? `drop-shadow(0 0 0.75rem ${colors.shadowWhite})` : `drop-shadow(0 0 0.75rem ${colors.shadow})`} ;
  }
`;

export const StyledFeelsLikeDisplay = styled.p`
  font-size: 0.8rem;
  ${StyledTemperatureDisplay} {
    display: inline;
  }
`

export const StyledTemperatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
`



