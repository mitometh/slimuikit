import React, { forwardRef } from 'react';
import { cn, themeClasses } from '../../utils/cn';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  placeholder?: string;
  icon?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  options,
  placeholder = 'Select option',
  icon,
  className,
  ...props
}, ref) => {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          'w-full',
          icon ? 'pl-10' : 'pl-4',
          'pr-10 py-3',
          'border',
          themeClasses.border.input,
          themeClasses.bg.input,
          themeClasses.text.primary,
          themeClasses.input.base,
          themeClasses.input.focus,
          'appearance-none',
          className
        )}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {icon && (
        <i className={cn(
          `fas fa-${icon}`,
          'absolute left-3 top-1/2 transform -translate-y-1/2',
          themeClasses.text.muted
        )} />
      )}
      <i className={cn(
        'fas fa-chevron-down',
        'absolute right-3 top-1/2 transform -translate-y-1/2',
        themeClasses.text.muted
      )} />
    </div>
  );
});

Select.displayName = 'Select';

export default Select;