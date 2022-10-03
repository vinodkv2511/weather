import { FunctionComponent } from "react";
import { StyledComboBoxMenu, StyledMenuItem } from "./ComboBox.styles";
import { ComboBoxProps } from "./ComboBox.types";


const ComboBoxMenu: FunctionComponent<Pick<ComboBoxProps, 'onSelect' | 'options'>> = (props) => {

  const { onSelect, options } = props;

  return <StyledComboBoxMenu>
    {
      options.map(option => {
        return <li><StyledMenuItem key={option.id} onClick={()=>{onSelect(option)}}>{option.value}</StyledMenuItem></li>
      })
    }
  </StyledComboBoxMenu>
}

export default ComboBoxMenu;