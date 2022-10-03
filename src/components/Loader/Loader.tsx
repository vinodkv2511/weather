import { FunctionComponent } from "react";
import { StyledLoader } from "./Loader.styles";
import { LoaderProps } from "./Loader.types";

// TODO implement blocking loader
const Loader:FunctionComponent<LoaderProps> = ({inline}) => {

  return <StyledLoader inline={inline} />
}

export default Loader;