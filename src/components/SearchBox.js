import React from 'react';

import './SearchBox.css';

const SearchBox = ({searchfield, searchChange}) => {
    return( 
        <div>
            <input 
                aria-label="Search for Robots"
                type="search" 
                placeholder="Search for Robots"
                onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;