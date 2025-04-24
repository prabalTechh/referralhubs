import React from "react";

type StatusType = 'Completed' | 'In Progress' | 'Not Started';

const CheckBox = ({ title, status }: { title: string; status: StatusType }) => {

  const getCircleStyle = () => {
    switch (status) {
      case 'Completed':
        return 'border-green-500 bg-green-100';
      case 'In Progress':
        return 'border-blue-500 bg-blue-100';
      case 'Not Started':
      default:
        return 'border-gray-300 bg-white';
    }
  };

  const getInnerIcon = () => {
    switch (status) {
      case 'Completed':
        return <div className="h-4 w-4 bg-green-500 rounded-full" />;
      case 'In Progress':
        return <div className="h-2.5 w-2.5 bg-blue-500 rounded-full" />;
      case 'Not Started':
      default:
        return null;
    }
  };

  const getTextColor = () => {
    switch (status) {
      case 'Completed':
        return 'text-green-600';
      case 'In Progress':
        return 'text-blue-600';
      case 'Not Started':
      default:
        return 'text-gray-500';
    }
  };

  // For debugging only
  const debugColorStyle = {
    'Completed': 'text-green-600',
    'In Progress': 'text-blue-600',
    'Not Started': 'text-gray-500'
  };

  return (
    <div className="flex items-center gap-4 p-2">
      <div
        className={`h-[48px] w-[48px] rounded-full border-2 flex items-center justify-center ${getCircleStyle()}`}
      >
        {getInnerIcon()}
      </div>
      <div>
        <h1 className="text-xs font-medium">{title}</h1>
        <p className={`text-xs ${getTextColor()}`}>{status}</p>
      </div>
    </div>
  );
};

export default CheckBox;