import React from "react";

const SimpleTextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
  className = "",
  error = "",
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`transition
                    duration-200
                    ease-in-out
                    px-3 
                    text-sm
                    py-2 
                    border 
                    rounded-md 
                    focus:outline-none 
                    focus:ring-1 
                    focus:ring-stone-800
                    ${disabled ? "bg-gray-100" : "bg-white"}
                    ${error ? "border-red-500" : "border-gray-300"}
                    ${className}
                `}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default SimpleTextInput;
