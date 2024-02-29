import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const CustomDropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionToggle = (option) => {
    setSelectedOptions((prevSelected) => {
      const isSelected = prevSelected.find((selected) => selected.value === option.value);
  
      const updatedSelectedOptions = isSelected
        ? prevSelected.filter((selected) => selected.value !== option.value)
        : [...prevSelected, option];
  
      if (onChange) {
        onChange(updatedSelectedOptions);
      }
  
      return updatedSelectedOptions;
    });
  };
  

  return (
    <div className="relative p-0.5vw">
      <p
        onClick={toggleDropdown}
        className="-mt-[0.02vw] cursor-pointer text-[0.9vw] m-vw border-[1px] font-medium border-gray-400 text-start text-black p-vw w-full max-w-[20vw] xl:max-w-[15vw] lg:max-w-[15vw] md:max-w-[15vw]"
      >
        {selectedOptions.length > 2
          ? `${selectedOptions.length} selected`
          : selectedOptions.length <= 2 && selectedOptions.length > 0
          ? `${selectedOptions.map((option) => option.title).join(', ')}`
          : selectedOptions.length === 0
          ? 'No Preference'
          : 'No Preference'}
      </p>
      <Icon icon="ep:arrow-down-bold" className="absolute top-[1.4vw] right-[10vw] xl:right-2vw lg:right-2vw md:right-2vw text-black font-medium text-[2vw] xl:text-vw lg:text-vw md:text-vw xl:top-[1.9vw] lg:top-[1.9vw] md:top-[1.9vw]" />
      {isOpen && (
        <div className="absolute bg-white ml-vw border border-gray-400 -mt-0.5vw h-[10vw] overflow-y-scroll w-full max-w-[20vw] xl:max-w-[15vw] lg:max-w-[15vw] md:max-w-[15vw]">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionToggle(option)}
              className={`flex p-vw hover:border-dotted border-gray-400 cursor-pointer hover:bg-gray-200 w-full items-center ${
                selectedOptions.find((selected) => selected.value === option.value) ? 'bg-gray-200' : ''
              }`}
            >
              <input
                type="checkbox"
                className="w-[1.5vw] h-[1.5vw] xl:w-vw xl:h-vw lg:w-vw lg:h-vw sm:w-vw sm:h-vw "
                value={option.value}
                checked={selectedOptions.find((selected) => selected.value === option.value)}
              />
              <span className="text-[1.5vw] xl:text-vw lg:text:vw md:text-vw  ml-0.5vw">{option.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
