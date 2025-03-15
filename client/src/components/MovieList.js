import React from "react"
import MovieCard from "./MovieCard";


function MovieList({ourMovie,title, rating}) {
    
    return (
      <>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center', width:'20'}}>
      {ourMovie.filter(moviee=>moviee.title.toUpperCase().includes(title.toUpperCase())).filter(moviee=>moviee.rating>rating).map(moviee =><MovieCard {...moviee}/>)}
     </div>
      </>
    );
  }








export default  MovieList