import { FunctionComponent, MouseEventHandler, useRef, useMemo, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import debounce from 'lodash.debounce';
import Loader from "../Loader/Loader";
import { StyledComboBox, StyledIcon, StyledInput } from "./ComboBox.styles";
import { ComboBoxProps, MenuItem } from "./ComboBox.types";
import ComboBoxMenu from "./ComboBoxMenu";

const ComboBox: FunctionComponent<ComboBoxProps> = (props) => {

  const {
    icon,
    label,
    placeholder,
    options,
    onChange,
    onSelect,
    showLoader,
    selectedOption
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useMemo(()=> uuidv4(), [])
  const [open, setOpen] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    inputRef.current?.focus();
  }

  const handleInputChange = debounce((e) => {
    onChange(e.target.value);
    setOpen(true);
  }, 250);

  const handleOnSelect: ComboBoxProps['onSelect'] = (option) => {
    setOpen(false);
    onSelect(option);
  }

  const handleClickOutside = () => {
    if(inputRef.current){
      inputRef.current.value = selectedOption?.value || '';
    }
    setOpen(false);
  }


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  })

  return <StyledComboBox showLoader={showLoader} onClick={handleClick}>
    {icon && <StyledIcon src={icon} alt=""/> }
    <label htmlFor={inputId}>{label}</label>
    <StyledInput placeholder={placeholder} ref={inputRef} id={inputId} onChange={handleInputChange} onBlur={handleClickOutside}/>
    {showLoader && <Loader inline />}
    {
      (open && !showLoader && options.length > 0) &&
      <ComboBoxMenu onSelect={handleOnSelect} options={options} />
    }
  </StyledComboBox>
}

export default ComboBox;