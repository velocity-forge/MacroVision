interface DropdownOption {
  readonly value: string | number;
  readonly label: string;
  readonly isDisabled?: boolean;
}

export default DropdownOption;
