import React from 'react';
import { cn } from '../../utils/cn';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
}

const Alert: React.FC<AlertProps> = ({ 
  type = 'info', 
  title, 
  children,
  className,
  ...props
}) => {
  const types = {
    info: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      border: 'border-blue-500',
      text: 'text-blue-700 dark:text-blue-400',
    },
    success: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      border: 'border-green-500',
      text: 'text-green-700 dark:text-green-400',
    },
    warning: {
      bg: 'bg-yellow-100 dark:bg-yellow-900/30',
      border: 'border-yellow-500',
      text: 'text-yellow-700 dark:text-yellow-400',
    },
    error: {
      bg: 'bg-red-100 dark:bg-red-900/30',
      border: 'border-red-500',
      text: 'text-red-700 dark:text-red-400',
    },
  };

  const style = types[type];

  return (
    <div 
      className={cn(
        style.bg,
        'border-l-4',
        style.border,
        style.text,
        'p-4 rounded',
        className
      )}
      {...props}
    >
      {title && <p className="font-bold">{title}</p>}
      {children && <p>{children}</p>}
    </div>
  );
};

export default Alert;