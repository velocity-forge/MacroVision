import Select, { GroupBase, Props, ThemeConfig } from 'react-select';
import DropdownOption from './DropdownOption';
import StyledDropdownIndicator from './StyledDropdownIndicator';

/**
 * Theme override for React Select.
 * @see https://react-select.com/styles#overriding-the-theme
 * @param theme
 */
const selectTheme: ThemeConfig = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: 'var(--brand-blue-base)',
    primary75: 'var(--brand-blue-light)',
    primary50: 'var(--brand-blue-light-1)',
    primary25: 'var(--brand-blue-light-2)',
    danger: 'var(--other-red-base)',
    dangerLight: 'var(--other-red-light)',
    neutral0: 'var(--grayscale-white)',
    neutral10: 'var(--grayscale-gray-1)',
    neutral20: 'var(--grayscale-gray-2)',
    neutral30: 'var(--grayscale-gray-3)',
    neutral40: 'var(--grayscale-gray-4)',
    neutral50: 'var(--grayscale-gray-5)',
    neutral60: 'var(--grayscale-gray-6)',
    neutral70: 'var(--grayscale-gray-7)',
    neutral90: 'var(--grayscale-black)',
  },
});

/**
 * Wraps React Select component to allow for standard styling.
 * @see https://react-select.com/typescript
 * @param props
 */
function StyledSelect<
  Option extends DropdownOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: Props<Option, IsMulti, Group>): JSX.Element {
  return (
    <Select
      {...props}
      theme={selectTheme}
      components={{
        DropdownIndicator: StyledDropdownIndicator,
      }}
      styles={{
        // Button to clear existing selections.
        clearIndicator: baseStyles => ({
          ...baseStyles,
        }),
        // Outer container.
        container: baseStyles => ({
          ...baseStyles,
          minWidth: '16.25rem',
          width: '100%',
        }),
        // Input bar.
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused
            ? 'var(--form-background-active)'
            : 'var(--form-background)',
          borderRadius: 0,
          borderColor: state.isFocused ? 'var(--ui-focus)' : 'var(--ui-border)',

          '&:hover': {
            backgroundColor: 'var(--form-background-active)',
            borderColor: state.isFocused
              ? 'var(--ui-focus)'
              : 'var(--ui-border-dark)',
          },
        }),
        // Dropdown caret.
        dropdownIndicator: baseStyles => ({
          ...baseStyles,
        }),
        // Option group
        group: baseStyles => ({
          ...baseStyles,
        }),
        // Label for each option group
        groupHeading: baseStyles => ({
          ...baseStyles,
        }),
        // Wrapper around dropdown caret and/or clear button
        indicatorsContainer: baseStyles => ({
          ...baseStyles,
        }),
        // Divider between dropdown indicator and the rest of content
        indicatorSeparator: baseStyles => ({
          ...baseStyles,
        }),
        // Search input field when isSearchable is true.
        input: baseStyles => ({
          ...baseStyles,
        }),
        // Indicator when still loading options from a remote source,
        // i.e. https://react-select.com/async
        loadingIndicator: baseStyles => ({
          ...baseStyles,
        }),
        // Message displayed while options loading is in progress.
        loadingMessage: baseStyles => ({
          ...baseStyles,
        }),
        // Outer wrapper for drawer when select is open
        menu: baseStyles => ({
          ...baseStyles,
          zIndex: 3,
        }),
        // List of options in the dropdown
        menuList: baseStyles => ({
          ...baseStyles,
        }),
        // Styles applied if the menu is portaled to another DOM node,
        // i.e. https://react-select.com/advanced#portaling
        // (You probably won't need to do this.)
        menuPortal: baseStyles => ({
          ...baseStyles,
        }),
        // Currently selected value(s) when isMulti is true.
        multiValue: baseStyles => ({
          ...baseStyles,
          borderRadius: '8px',
        }),
        // Selected value(s) name/label when isMulti is true.
        multiValueLabel: baseStyles => ({
          ...baseStyles,
        }),
        // Button to remove a single selected value when isMulti is true.
        multiValueRemove: baseStyles => ({
          ...baseStyles,
        }),
        // Text displayed when there are no options.
        noOptionsMessage: baseStyles => ({
          ...baseStyles,
        }),
        // Individual option in the dropdown list
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isSelected
            ? 'var(--brand-blue-dark)'
            : state.isFocused
              ? 'var(--brand-blue-base)'
              : 'transparent',
          color:
            state.isSelected || state.isFocused
              ? 'var(--text-on-dark)'
              : 'var(--text-primary)',
        }),
        // Placeholder text
        placeholder: baseStyles => ({
          ...baseStyles,
        }),
        // Currently selected value when isMulti is false
        singleValue: baseStyles => ({
          ...baseStyles,
          color: 'var(--text-primary)',
        }),
        // Wrapper around currently selected value(s)
        valueContainer: baseStyles => ({
          ...baseStyles,
        }),
      }}
    />
  );
}

export default StyledSelect;
