import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  
  const [imagenes, setimagenes] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setimagenes(newImages);
    setisLoading(false);
  }

   useEffect(() => {
    getImages();
   }, [])
  
  console.log(imagenes)
  return {
     imagenes,
     isLoading
  }
}
