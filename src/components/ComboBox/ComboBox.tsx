import { FunctionComponent, MouseEventHandler, useRef, useMemo, useState, useEffect, ChangeEventHandler, FocusEvent, useCallback } from "react";
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
  const comboBoxRef = useRef<HTMLDivElement>(null);
  const inputId = useMemo(()=> uuidv4(), [])
  const [open, setOpen] = useState(false);

  const [inputValue, setInputValue] = useState(selectedOption?.value || '');

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    inputRef.current?.focus();
  }

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
    if(!open){
      setOpen(true);
    }
  };

  const handleOnSelect: ComboBoxProps['onSelect'] = (option) => {
    setOpen(false);
    onSelect(option);
  }

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if(comboBoxRef.current?.contains(event.target as Node)) {
      return;
    }
    setInputValue(selectedOption?.value || '')
    setOpen(false);
  }, [selectedOption])

  const handleBlur = useCallback((e: any) => {
    if(!comboBoxRef.current?.contains(e.relatedTarget)) {
      setInputValue(selectedOption?.value || '');
      setOpen(false);
    }
  }, [selectedOption])

  useEffect(()=>{
    setInputValue(selectedOption?.value || '');
  }, [selectedOption])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    const inputElement = inputRef.current;
    inputElement?.addEventListener('focusout', handleBlur);
    return () => {
      inputElement?.addEventListener('focusout', handleBlur);
    }
  }, [handleBlur])

  return <StyledComboBox showLoader={showLoader} onClick={handleClick} ref={comboBoxRef}>
    {icon && <StyledIcon src={icon} alt=""/> }
    <label htmlFor={inputId}>{label}</label>
    <StyledInput
      placeholder={placeholder}
      ref={inputRef}
      id={inputId}
      onChange={handleInputChange}
      value={inputValue}
    />
    {showLoader && <Loader inline />}
    {
      (open && !showLoader && options.length > 0) &&
      <ComboBoxMenu onSelect={handleOnSelect} options={options} />
    }
  </StyledComboBox>
}

export default ComboBox;