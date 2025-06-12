import React, { useState } from 'react'

interface ChartProps {
  title: string
}

type Period = 'Day' | 'Week' | 'Month' | 'Year'

const Chart: React.FC<ChartProps> = ({ title }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('Day')
  const periods: Period[] = ['Day', 'Week', 'Month', 'Year']

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-soft dark:shadow-none dark:border dark:border-gray-700 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-dark-800 dark:text-white">{title}</h3>
        <div className="flex gap-2">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition ${
                selectedPeriod === period
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center">
        <p className="text-gray-400 dark:text-gray-500">Chart Visualization Area</p>
      </div>
    </div>
  )
}

export default Chart