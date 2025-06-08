import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showLabel?: boolean;
  showValue?: boolean;
  height?: string;
  color?: string;
  backgroundColor?: string;
  className?: string;
  animated?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showLabel = true,
  showValue = true,
  height = 'h-2',
  color = 'bg-blue-600 dark:bg-blue-500',
  backgroundColor = 'bg-gray-200 dark:bg-gray-700',
  className = '',
  animated = true,
}) => {
  const percentage = Math.min(Math.max(0, value), max) / max * 100;

  return (
    <div className={`w-full ${className}`}>
      {(showLabel && label) && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
          {showValue && (
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{value}%</span>
          )}
        </div>
      )}
      <div className={`w-full ${height} ${backgroundColor} rounded-full overflow-hidden`}>
        <div 
          className={`${color} rounded-full ${animated ? 'transition-all duration-1000 ease-out' : ''}`} 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;