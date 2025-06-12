import React from 'react';
import { cn, themeClasses } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  image?: string | React.ReactNode;
  badge?: string;
  footer?: React.ReactNode;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  image, 
  badge, 
  footer,
  hover = false,
  className,
  ...props
}) => {
  return (
    <div 
      className={cn(
        themeClasses.bg.card,
        'rounded-lg overflow-hidden',
        themeClasses.shadow.card,
        themeClasses.border.default,
        hover && cn(
          'hover:shadow-medium dark:hover:border-gray-600',
          'transition-all cursor-pointer'
        ),
        className
      )}
      {...props}
    >
      {image && (
        <div className="h-40 bg-gradient-to-r from-primary-400 to-primary-600">
          {typeof image === 'string' ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            image
          )}
        </div>
      )}
      <div className="p-5">
        {(title || badge) && (
          <div className="flex items-center justify-between mb-3">
            {title && <h3 className={cn('text-lg font-semibold', themeClasses.text.primary)}>{title}</h3>}
            {badge && (
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded-full">
                {badge}
              </span>
            )}
          </div>
        )}
        {children}
        {footer && (
          <div className={cn('mt-4 pt-4 border-t', themeClasses.border.subtle)}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;