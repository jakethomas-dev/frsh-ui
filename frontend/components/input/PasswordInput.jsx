"use client";
import React, { useState, useEffect } from "react";

const PasswordInput = ({
  label,
  name,
  onChange,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
  className = "",
  error = "",
}) => {
  const [value, setValue] = useState("");
  const [validations, setValidations] = useState({
    minLength: false,
    hasNumber: false,
    hasSpecial: false,
    hasUppercase: false,
  });

  useEffect(() => {
    setValidations({
      minLength: value.length >= 8,
      hasNumber: /\d/.test(value),
      hasUppercase: /[A-Z]/.test(value),
    });
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const ValidationRule = ({ satisfied, text }) => (
    <div className="flex items-center gap-2 text-sm">
      <div
        className={`w-4 h-4 rounded-full transition duration-300 ease-in-out ${
          satisfied
            ? "bg-green-500 transition duration-300 ease-in-out"
            : "bg-gray-300 transition duration-300 ease-in-out"
        }`}
      />
      <span>{text}</span>
    </div>
  );

  return (
    <div className="flex flex-col gap-2">
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
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        value={value}
        onChange={handleChange}
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
      <div className="flex flex-col gap-y-3 mt-2">
        <ValidationRule
          text="8+ characters"
          satisfied={validations.minLength}
        />
        <ValidationRule
          text="Contains number"
          satisfied={validations.hasNumber}
        />
        <ValidationRule
          text="Contains uppercase"
          satisfied={validations.hasUppercase}
        />
      </div>
    </div>
  );
};

export default PasswordInput;
