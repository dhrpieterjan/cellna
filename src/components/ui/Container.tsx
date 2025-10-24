import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  color?: string;
  minHeight?: string;
  className?: string;
}

const Container = ({ 
  children, 
  color = 'transparent', 
  minHeight = 'auto',
  className = ''
}: ContainerProps) => {
  const colorClasses = {
    '#3C4146': 'bg-primary-500',
    '#F3F5F6': 'bg-secondary-100',
    'transparent': 'bg-transparent'
  };

  const bgClass = colorClasses[color as keyof typeof colorClasses] || 'bg-transparent';

  return (
    <div 
      className={`w-full overflow-x-hidden ${bgClass} ${className}`}
      style={{ minHeight }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;