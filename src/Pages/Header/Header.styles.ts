import styled from "styled-components";
import { colors, tokens } from "../../utils/styleTokens";
import { StyledComboBox } from "../../components/ComboBox/ComboBox.styles";


export const StyledHeader = styled.header`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }


  ${StyledComboBox} {
    border: none;
    width: 18ch;

    input {
      box-shadow: none;
    }

    &:hover input {
      box-shadow: 0px 1px 0 0 ${colors.dullText};
    }

    input:focus{
      box-shadow: 0px 1px 0 0 ${colors.nightBackground};
    }
  }
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
// TODO - Rename pages to connected components
