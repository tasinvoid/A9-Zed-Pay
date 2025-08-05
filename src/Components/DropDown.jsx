import React, { useState, useRef, useEffect } from "react";

const CustomDropdown = ({
  options,
  onSelect,
  placeholder = "Select an option",
  className,
}) => {
  const [selectedValue, setSelectedValue] = useState();
  const [selectedLabel, setSelectedLabel] = useState();
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const dropdownRef = useRef(null);

  const handleSelect = (value) => {
    const selected = options.find((opt) => opt.value === value);
    setSelectedValue(value);
    setSelectedLabel(selected ? selected.label : undefined);
    onSelect(value, selected ? selected.label : "");
    setIsOpen(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Changed to standard function
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block w-full" ref={dropdownRef}>
      <div
        className={`w-full bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-md px-4 py-2 cursor-pointer flex items-center justify-between ${className}`}
        onClick={() => setIsOpen(!isOpen)} // Use state to toggle
      >
        <span className={selectedValue ? "text-white" : "text-gray-400"}>
          {selectedLabel || placeholder}
        </span>
        {/* You can add an icon here if you have one */}
      </div>
      {isOpen && ( // Conditionally render the dropdown list
        <ul className="absolute z-10 mt-1 w-full bg-gray-900 border border-gray-800 text-white rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              value={option.value}
              className="px-4 py-2 hover:bg-gray-800 hover:text-white transition-colors cursor-pointer"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const DropdownDemo = ({setSelectedValue}) => {
  const dropdownOptions = [
    { value: "telephone", label: "Telephone Bill" },
    { value: "internet", label: "Internet Bill" },
    { value: "water", label: "Water Bill" },
    { value: "gas", label: "Gas Bill" },
    { value: "electricity", label: "Electricity Bill" },
  ];

  const handleOptionSelect = (value, label) => {
    console.log("Selected value:", value, "Label:", label);
    setSelectedValue(value)
  };

  return (
    <div className=" bg-gray-900 text-white p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Custom Dropdown Demo
        </h1>
        <p className="text-gray-400 text-center">
          Select an option from the dropdown below.
        </p>
        <CustomDropdown
          options={dropdownOptions}
          onSelect={handleOptionSelect}
          placeholder="Choose an option..."
          className="w-full"
        />
      </div>
    </div>
  );
};

export default DropdownDemo;
