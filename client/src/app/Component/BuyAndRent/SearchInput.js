import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useGlobalContext } from '../../UserContext/UserContext';


const SearchInput = ({clearInputField}) => {
    const {setSearchedRentLocation} = useGlobalContext()
    const [searchedLocation, setSearchedLocation] = useState('');
      const [filteredSuggestions, setFilteredSuggestions] = useState([]);
      const [showSuggestions, setShowSuggestions] = useState(true);
      const [showMatchCase, setShowMatchCase] = useState(false);
      const suggestions = ['Armley', 'Beeston', 'Bradford', 'Bramley', 'City Center', 'East End Park', 'Farsley', 'Gildersome', 'Horsforth', 'Leeds', 'Meanwood', 'Morley', 'Northgate House', 'Pudsey', 'Stanningley', 'Wortley', 'Wyke'];
  
      const inputRef = useRef();
  
      useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
    
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, []);

      useEffect(() => {
        if(clearInputField){
          setSearchedLocation('')
        }
      }, [clearInputField])
    
      const handleOutsideClick = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
          setShowSuggestions(false);
        }
      };
    
      const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchedLocation(inputValue);
        setSearchedRentLocation(inputValue);
    
        // Filter suggestions based on input value
        const filtered = suggestions.filter((location) =>
          location.toLowerCase().startsWith(inputValue.toLowerCase())
        );
    
        setFilteredSuggestions(filtered);
        if(!filtered.length > 0){
          setShowMatchCase(true);
        }
        setShowSuggestions(true);
      };
    
      const handleSuggestionClick = (suggestion) => {
        setSearchedLocation(suggestion);
        setSearchedRentLocation(suggestion);
        setShowSuggestions(false);
      };
  return (
    <div className='relative w-full'>
        <div className="col-center w-full">
            <section className="w-full max-w-[60vw] row-center bg-[#ffff] rounded-md border-[1px]" ref={inputRef}>
                <Icon icon="fluent:location-28-filled" className='text-[2vw] xl:text-vw lg:text-vw md:text-vw  cursor-pointer text-blue-950 ' />
                <input type="text" placeholder='Search Location....' value={searchedLocation} onChange={handleInputChange} className='text-[2vw] xl:text-vw lg:text-vw md:text-vw p-[1vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] border-none focus:outline-none w-full max-w-[55vw]' />
            </section>
            </div>
      {showSuggestions && filteredSuggestions.length > 0 ? (
  <ul className="absolute top-[3vw] left-[18.5vw] bg-white w-full max-w-[15vw] mt-0.5vw p-[0.5vw] border-gray-500 rounded-md border-[1px]">
  {filteredSuggestions.map((suggestion, index) => (
            <li key={index} className="cursor-pointer text-[2.3vw] xl:text-vw lg:text-vw md:text-vw font-medium" onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      ) :
      !filteredSuggestions.length > 0 && showMatchCase && <p className='absolute top-[3vw] left-[18.5vw] bg-white cursor-pointer text-vw font-medium w-full max-w-[15vw] mt-0.5vw p-[0.5vw] border-gray-500 rounded-md border-[1px]'>No matches found</p>
       }
    </div>
  )
}

export default SearchInput