import React from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  description?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  description,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start">
        {icon && (
          <div className="flex-shrink-0 mr-4 p-2 bg-blue-50 rounded-full text-blue-700">
            {icon}
          </div>
        )}

        <div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            {title}
          </h3>
          <div className="mt-2">
            <p className="text-3xl font-semibold text-gray-900">{value}</p>
          </div>
          {description && (
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
