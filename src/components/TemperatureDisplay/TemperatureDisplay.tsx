import { FunctionComponent } from "react";
import { StyledTemperatureDisplay } from "./TemperatureDisplay.styles";
import { TemperatureDisplayProps } from "./TemperatureDisplay.types";


const TemperatureDisplay: FunctionComponent<TemperatureDisplayProps> = (props) => {

  const {temperature, units, fontSize} = props;

  return <StyledTemperatureDisplay fontSize={fontSize}>{temperature}<span>°{units}</span></StyledTemperatureDisplay>

}

export default TemperatureDisplay;