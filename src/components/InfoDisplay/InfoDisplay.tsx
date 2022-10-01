import { FunctionComponent } from "react";
import { StyledInfoDisplay, StyledLabel, StyledUnits, StyledValue } from "./InfoDisplay.styles";
import { InfoDisplayProps } from "./InfoDisplay.types";

const InfoDisplay: FunctionComponent<InfoDisplayProps > = ({label, value, units}) => {
  return <StyledInfoDisplay>
    <StyledLabel>{label}</StyledLabel>
    <StyledValue>{value}{ units && <StyledUnits>{units}</StyledUnits>}</StyledValue>
  </StyledInfoDisplay>
}

export default InfoDisplay;