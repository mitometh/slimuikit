import React from 'react';
import { cn, themeClasses } from '../../utils/cn';

interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface InputGroupAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: 'left' | 'right';
  variant?: 'default' | 'primary' | 'dark';
}

interface InputGroupButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  position?: 'left' | 'right';
  variant?: 'primary' | 'secondary' | 'danger';
}

export const InputGroup: React.FC<InputGroupProps> = ({ 
  children, 
  className,
  ...props
}) => {
  return (
    <div className={cn('flex rounded-xl overflow-hidden', className)} {...props}>
      {children}
    </div>
  );
};

export const InputGroupAddon: React.FC<InputGroupAddonProps> = ({ 
  children, 
  position = 'left',
  variant = 'default',
  className,
  ...props
}) => {
  const variants = {
    default: cn(
      themeClasses.bg.muted,
      themeClasses.text.tertiary,
      themeClasses.border.default
    ),
    primary: cn(
      'bg-primary-50 dark:bg-primary-900/20',
      'text-primary-700 dark:text-primary-400',
      'border-primary-200 dark:border-primary-800'
    ),
    dark: cn(
      'bg-gray-800 dark:bg-gray-900',
      'text-white dark:text-gray-100',
      'border-gray-700 dark:border-gray-600'
    )
  };

  const positionClasses = {
    left: 'rounded-l-xl border-r-0',
    right: 'rounded-r-xl border-l-0'
  };

  return (
    <div 
      className={cn(
        'px-4 py-3 border flex items-center',
        variants[variant],
        positionClasses[position],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const InputGroupButton: React.FC<InputGroupButtonProps> = ({ 
  children, 
  position = 'right',
  variant = 'primary',
  className,
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 dark:hover:bg-primary-400 border-primary-500 dark:border-primary-400',
    secondary: cn(
      themeClasses.bg.primary,
      themeClasses.text.secondary,
      themeClasses.hover.bg,
      themeClasses.border.default
    ),
    danger: 'bg-red-500 dark:bg-red-600 text-white hover:bg-red-600 dark:hover:bg-red-500 border-red-500 dark:border-red-400'
  };

  const positionClasses = {
    left: 'rounded-l-xl border-r-0',
    right: 'rounded-r-xl border-l-0'
  };

  return (
    <button
      className={cn(
        'px-4 py-3 border font-medium transition-colors',
        variants[variant],
        positionClasses[position],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const InputGroupInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ 
  className,
  ...props 
}) => {
  return (
    <input
      className={cn(
        'flex-1 px-4 py-3',
        'border-t border-b',
        themeClasses.border.input,
        themeClasses.bg.input,
        themeClasses.text.primary,
        themeClasses.text.placeholder,
        themeClasses.focus.outline,
        themeClasses.focus.ring,
        themeClasses.focus.border,
        'focus:z-10',
        'transition-all',
        className
      )}
      {...props}
    />
  );
};

export default InputGroup;