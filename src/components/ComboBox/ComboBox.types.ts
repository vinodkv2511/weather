export interface MenuItem {
  id: string,
  value: string
}

export interface ComboBoxProps {
  /** Icon file path, use in src attribute of img */
  icon: string,
  /** Input label, for screenreader users only */
  label: string,
  /** Placeholder for input */
  placeholder: string,
  /** Menu options */
  options: MenuItem[],
  /** Selected option */
  selectedOption?: MenuItem,
  /** Change handler for input field */
  onChange: (value: string) => void,
  /** Change handler for when an item is selected */
  onSelect: (value: MenuItem) => void,
  /** Flag to show loader */
  showLoader: boolean,
}