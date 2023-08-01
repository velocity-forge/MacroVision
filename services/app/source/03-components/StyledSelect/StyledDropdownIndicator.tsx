import Image from 'next/image';
import { components, DropdownIndicatorProps, GroupBase } from 'react-select';
import DropdownOption from './DropdownOption';

/**
 * Custom component for the dropdown indicator.
 *
 * You can replace the image with your own image or Icon or remove it from
 * the `components` prop in StyledSelect to use React Select's default.
 * @see https://react-select.com/components#replacing-components
 * @param props
 */
function StyledDropdownIndicator<Option = DropdownOption>(
  props: DropdownIndicatorProps<Option, boolean, GroupBase<Option>>,
) {
  return (
    <components.DropdownIndicator {...props}>
      <Image src="/images/select-arrows.svg" alt="" width={20} height={20} />
    </components.DropdownIndicator>
  );
}

export default StyledDropdownIndicator;
