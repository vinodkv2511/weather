import styled from "styled-components";
import { colors } from "../../utils/styleTokens";
import { LoaderProps } from "./Loader.types";

export const StyledLoader = styled.span<LoaderProps>`
  width: 0.7rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border-top: 0.08rem solid ${colors.nightBackground};
  border-right: 0.08rem solid ${colors.nightBackground};
  animation: spin 1s infinite linear;


  @keyframes spin {
  100% {
    transform: rotate(360deg); 
  }
}
`