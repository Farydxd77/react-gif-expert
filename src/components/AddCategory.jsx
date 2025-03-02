import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) => {
        setinputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        if(inputValue.trim().length <= 1) return;
       
        // setcategories(categories => [inputValue,...categories])
        onNewCategory(inputValue.trim());
        setinputValue('');       // console.log(event)
    }
  return (
    <form onSubmit={ onSubmit }> 
        <input
        type = "text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) =>onInputChange(event)}
        />
    </form>
    
  )
}
;