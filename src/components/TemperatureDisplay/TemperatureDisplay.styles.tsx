import styled from "styled-components";
import { tokens } from "../../utils/styleTokens";
import { TemperatureDisplayProps } from "./TemperatureDisplay.types";


export const StyledTemperatureDisplay = styled.p<{fontSize: TemperatureDisplayProps['fontSize']}>`
  font-family: ${tokens.secondaryFontFamily};
  font-weight: bold;
  font-size: ${props => props.fontSize || '2rem'};

  > span {
    font-size: 0.6em;
    vertical-align: top;
    margin-inline-start: 0.05rem;
  }
`