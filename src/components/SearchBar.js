import React, { useState } from "react";

const SearchBar = ({onTermSubmit}) => {
    const [term,setTerm] = useState('');

    const onSubmit = e =>{
        e.preventDefault();
        // make sure we call callback from parent component
        onTermSubmit(term);        
    };

    return (
        <div className="search-bar ui segment">
                <form className="ui form" onSubmit={onSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text"
                        value={term}
                        onChange={(event)=> setTerm(event.target.value)}
                         />
                    </div>
                </form>
            </div>
    );
};

export default SearchBar;