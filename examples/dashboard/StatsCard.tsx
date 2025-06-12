import React from 'react'

interface StatsCardProps {
  title: string
  value: string | number
  icon: string
  trend?: 'up' | 'down'
  trendValue?: string
  iconColor?: string
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  trendValue, 
  iconColor = "from-primary-400 to-primary-600" 
}) => {
  const isPositive = trend === 'up'
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-soft hover-lift">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${iconColor} rounded-xl flex items-center justify-center`}>
          <i className={`fas fa-${icon} text-white text-xl`}></i>
        </div>
        {trendValue && trend && (
          <span className={`${isPositive ? 'text-green-500' : 'text-red-500'} text-sm font-medium flex items-center`}>
            <i className={`fas fa-arrow-${trend} mr-1`}></i> {trendValue}
          </span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-dark-800 dark:text-white">{value}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{title}</p>
    </div>
  )
}

export default StatsCard