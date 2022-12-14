import styled from "styled-components";
import { colors, tokens } from "../../utils/styleTokens";
import { StyledWeatherIcon } from "../WeatherIcon/WeatherIcon.styles";

export const StyledWeatherGlanceCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-shrink: 0;
box-shadow: 0 0 0.65rem 0 ${colors.shadow};
border-radius: ${tokens.borderRadius};
width: 5rem;
flex-grow: 0;
padding: 1rem 0.5rem;
gap: 0.8rem;
font-size: 0.8rem;
justify-content: space-between;

${StyledWeatherIcon} {
  width: 70%;
}
`