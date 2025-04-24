import React from 'react';

const ToggleSwitch = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="pr-4">
        <label 
          htmlFor={label.replace(/\s+/g, "-").toLowerCase()} 
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
      <div className="relative inline-block w-12 align-middle select-none">
        <input
          type="checkbox"
          className="sr-only peer"
          id={label.replace(/\s+/g, "-").toLowerCase()}
        />
        <label
          htmlFor={label.replace(/\s+/g, "-").toLowerCase()}
          className="block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:bg-blue-600"
        ></label>
        <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 peer-checked:translate-x-6"></span>
      </div>
    </div>
  );
};

export default ToggleSwitch;