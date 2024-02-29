import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../UserContext/UserContext';

const Searchbox = ({handleRentBtunClick, handleBuyBtunClick, clearInputField}) => {
    const {searchedLocation, setSearchedLocation} = useGlobalContext();
      const [showRentSection, setShowRentSection] = useState(true);
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
        setShowSuggestions(false);
      };


  return (
    <div>
        <section className="w-full max-w-[80vw] absolute bottom-[5vw] left-[10vw] xl:left-[15vw] lg:left-[10vw] md:left-[15vw] xl:max-w-[70vw] lg:max-w-[70vw] md:max-w-[70vw] p-2vw rounded-sm bg-[#152347] opacity-90">
      <h1 className='text-white text-[2vw] xl:text-[1.1vw] lg:text-[1.1vw] md:text-[1.1vw] italic font-medium'>Find your perfect home</h1>
      <div className="flex mt-vw items-center w-full" ref={inputRef}>
        <input
          type="text"
          name='location'
          onChange={handleInputChange}
          value={searchedLocation}
          placeholder="Enter City..."
          className="w-full p-vw xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] text-[1.5vw] xl:text-vw lg:text-vw md:text-vw bg-white xl:max-w-[55vw] lg:max-w-[55vw] md:max-w-[55vw] rounded-none focus:outline-none"
        />
        <div className="flex ml-vw items-center">
          {/* <Link to='/search-property'> */}
            <p className={`${showRentSection ? 'bg-yellow-600 text-white' : 'bg-gray-300'} text-[1.5vw] xl:text-[1.1vw] lg:text-[1.1vw] md:text-[1.1vw] w-5vw cursor-pointer hover:bg-gray-500 p-vw xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] text-center`} onClick={() => {setShowRentSection(true); handleRentBtunClick() }}> Rent</p>
          {/* </Link> */}
          {/* <Link to='/search-property'> */}
            <p className={`${showRentSection ? 'bg-gray-300' : 'bg-red-500 text-white'} text-[1.5vw] xl:text-[1.1vw] lg:text-[1.1vw] md:text-[1.1vw] ml-0.3vw w-5vw hover:bg-gray-500 cursor-pointer p-vw xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] text-center`} onClick={() => {setShowRentSection(false); handleBuyBtunClick()}}>Buy </p>
          {/* </Link> */}
        </div>
      </div>

      {/* Suggestions dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 ? (
        <ul className="absolute bg-white w-full max-w-[15vw] mt-0.5vw p-[0.5vw] border-gray-500 rounded-md border-[1px]">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} className="cursor-pointer text-[2vw] xl:text-vw lg:text-vw md:text-vw font-medium" onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      ) :
      !filteredSuggestions.length > 0 && showMatchCase && <p className='absolute bg-white cursor-pointer text-vw font-medium w-full max-w-[15vw] mt-0.5vw p-[0.5vw] border-gray-500 rounded-md border-[1px]'>No matches found</p>
       }
    </section>
    </div>
  )
}

export default Searchbox