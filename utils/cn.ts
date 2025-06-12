import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const themeClasses = {
  // Backgrounds
  bg: {
    primary: 'bg-white dark:bg-gray-800',
    secondary: 'bg-gray-50 dark:bg-gray-700',
    tertiary: 'bg-gray-100 dark:bg-gray-900',
    card: 'bg-white dark:bg-gray-800',
    input: 'bg-white dark:bg-gray-800',
    muted: 'bg-gray-50 dark:bg-gray-700',
  },
  
  // Borders
  border: {
    default: 'border-gray-200 dark:border-gray-700',
    input: 'border-gray-200 dark:border-gray-600',
    subtle: 'border-gray-100 dark:border-gray-800',
    strong: 'border-gray-300 dark:border-gray-600',
    divider: 'divide-gray-200 dark:divide-gray-700',
  },
  
  // Text colors
  text: {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-700 dark:text-gray-200',
    tertiary: 'text-gray-600 dark:text-gray-300',
    muted: 'text-gray-500 dark:text-gray-400',
    placeholder: 'placeholder-gray-400 dark:placeholder-gray-500',
  },
  
  // Interactive states
  hover: {
    bg: 'hover:bg-gray-50 dark:hover:bg-gray-700',
    bgSubtle: 'hover:bg-gray-100 dark:hover:bg-gray-600',
    text: 'hover:text-gray-900 dark:hover:text-white',
    border: 'hover:border-gray-300 dark:hover:border-gray-600',
  },
  
  // Focus states
  focus: {
    ring: 'focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
    ringOffset: 'focus:ring-offset-2 dark:focus:ring-offset-gray-800',
    border: 'focus:border-primary-500 dark:focus:border-primary-400',
    outline: 'focus:outline-none',
  },
  
  // Common patterns
  input: {
    base: 'rounded-xl transition-all',
    focus: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
  },
  
  // Shadows
  shadow: {
    soft: 'shadow-soft dark:shadow-none',
    medium: 'shadow-medium dark:shadow-lg',
    card: 'shadow-soft dark:shadow-none dark:border',
  }
}