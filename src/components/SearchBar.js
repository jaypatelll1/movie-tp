import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ setSearchTerm }) => {
    const [input, setInput] = useState("");

    const handleInputChange = (event) => {
        setInput(event.target.value); // Update local input state
    };

    const handleSearch = () => {
        setSearchTerm(input); // Pass the search term to the parent component
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Search for movies..."
            />
            <button type="button" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
