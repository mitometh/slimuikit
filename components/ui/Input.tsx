import React, { forwardRef } from 'react';
import { cn, themeClasses } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  type = 'text',
  icon,
  className,
  ...props
}, ref) => {
  return (
    <div className="relative">
      <input
        ref={ref}
        type={type}
        className={cn(
          'w-full',
          icon ? 'pl-10' : 'pl-4',
          'pr-4 py-3',
          'border',
          themeClasses.border.input,
          themeClasses.bg.input,
          themeClasses.text.primary,
          themeClasses.text.placeholder,
          themeClasses.input.base,
          themeClasses.input.focus,
          className
        )}
        {...props}
      />
      {icon && (
        <i className={cn(
          `fas fa-${icon}`,
          'absolute left-3 top-1/2 transform -translate-y-1/2',
          themeClasses.text.muted
        )} />
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;