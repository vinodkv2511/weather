import styled from "styled-components";
import { colors, tokens } from "../../utils/styleTokens";
import { ComboBoxProps } from "./ComboBox.types";


export const StyledIcon = styled.img`
  width: 1rem;
`

export const StyledInput = styled.input`
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`

export const StyledComboBox = styled.div<Pick<ComboBoxProps, 'showLoader'>>`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0.125rem 0.25rem;
  gap: 0.25rem;
  width: 20ch;
  position: relative;
  font-family: ${tokens.secondaryFontFamily};
  
  ${StyledInput} {
    flex-shrink: 1;
    flex-grow: 1;
    font-family: inherit;
    font-size: 0.7rem;
  }

  label{
    position: absolute;
    left: -100000px;
  }
`

export const StyledComboBoxMenu = styled.ul`
  position: absolute;
  box-shadow: 0 0.1rem 0.25rem 0.1rem ${colors.shadow};
  width: calc(100% - 2rem);
  left: 1.25rem;
  top: calc(100% + 0.15rem);
  list-style-type: none;
  font-size: 0.7rem;
  z-index: 10000;
  background: ${colors.white};
`

export const StyledMenuItem = styled.button`
  padding: 0.25rem;
  user-select: none;
  background: none;
	color: inherit;
	border: none;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  width: 100%;

  :hover{
    background: ${colors.shadow}
  }

  :active{
    background: ${colors.dayBackground};
    color: ${colors.white};
  }

`