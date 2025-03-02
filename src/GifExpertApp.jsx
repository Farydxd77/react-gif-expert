import React, { useState } from 'react'
import './styles.css'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory))return;

        // console.log(newCategory)
        // categories.push(newCategory)
        setcategories([newCategory,...categories]);
        // setcategories([...categories,'valoran'])  
    }

  return (
    <>
   
     <h1>GifApp</h1>
     <AddCategory 
    
     onNewCategory = { value => onAddCategory(value) } />

    {categories.map((category) => <GifGrid key={category} category={category}/>) }
    </>
  )
}
