import React from 'react';
import { cn, themeClasses } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gradient' | 'dark' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  icon?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon,
  loading = false,
  disabled = false,
  className,
  ...props 
}) => {
  const isDisabled = disabled || loading;

  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover-lift shadow-soft',
    secondary: cn(
      themeClasses.bg.primary,
      themeClasses.text.secondary,
      'border',
      themeClasses.border.default,
      'hover-lift shadow-soft'
    ),
    gradient: 'bg-gradient-to-r from-accent-purple to-accent-pink text-white hover-lift shadow-soft',
    dark: 'bg-dark-800 dark:bg-dark-700 text-white hover:bg-dark-900 dark:hover:bg-dark-600 shadow-soft',
    outline: cn(
      'gradient-border',
      themeClasses.bg.primary,
      'text-primary-600 dark:text-primary-400',
      'hover:shadow-medium'
    ),
    danger: cn(
      'bg-red-50 dark:bg-red-900/20',
      'text-red-600 dark:text-red-400',
      'hover:bg-red-100 dark:hover:bg-red-900/30'
    ),
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-6 py-3',
    icon: 'w-10 h-10 p-0',
  };

  return (
    <button
      className={cn(
        'rounded-lg font-medium transition-all',
        variants[variant],
        sizes[size],
        isDisabled && 'opacity-50 cursor-not-allowed',
        !isDisabled && 'cursor-pointer',
        (size === 'icon' || loading) && 'flex items-center justify-center',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <div className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </div>
      ) : (
        <>
          {icon && <i className={cn(`fas fa-${icon}`, children && 'mr-2')} />}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;