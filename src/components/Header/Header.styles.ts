import styled from "styled-components";
import { colors, tokens } from "../../utils/styleTokens";


export const StyledHeader = styled.header`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  flex-wrap: wrap;
`

export const StyledLogo = styled.img`
  width: 2.5rem;
`

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${tokens.logoFontFamily};
  font-size: 1.5rem;
  color: ${colors.brandPrimary};
`


// TODO - handle replacement of search bar. Make it a reusable component
// TODO - Rename pages to connected components
export const StyledLocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`