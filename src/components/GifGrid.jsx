import { useState, useEffect} from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const {imagenes, isLoading} = useFetchGifs(category);

  // console.log(images,isLoading);

   
  return (
    <>
    <h3>{category}</h3>
    {
      isLoading && (<h2>Cargando.....</h2>)
    }
    
    <div className="card-grid">
        {
          imagenes.map( (image) => (
           <GifItem key={image.id}
            {...image}
           />
          ))
        }
    </div>
  
    </>
  )
} 
