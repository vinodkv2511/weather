import styled from "styled-components";
import { tokens } from "../../utils/styleTokens";

export const StyledValue = styled.p``;
export const StyledUnits = styled.span``;
export const StyledLabel = styled.p``;

export const StyledInfoDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: flex-start;
  padding: 1rem;
  width: 12ch;
  gap: 0.5rem;

  ${StyledLabel} {
    font-size: 0.8rem;
    text-transform: capitalize;
  }

  ${StyledValue} {
    font-family: ${tokens.primaryFontFamily};
    font-weight: bold;
    font-size: 2rem;
    
    ${StyledUnits} {
      font-size: 0.8rem;
      font-family: ${tokens.secondaryFontFamily};
      font-weight: normal;
      margin-inline-start: 0.2rem;
    }
  }
`