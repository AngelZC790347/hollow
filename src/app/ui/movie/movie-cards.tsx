import { Movie } from "@/app/lib/data";
import React from "react"

const MovieCard = ({movie}:{movie:Movie}) => {
  return (
    <div className="h-full text-center border-blue-200 border-solid border rounded-lg p-10 hover:bg-slate-950 hover:border-indigo-500 hover:text-slate-100">      
      <img src={"https://image.tmdb.org/t/p/original"+movie.poster_path} alt={`poster movie ${movie.title}`}/>
      <h1 className="text-3xl my-6">{movie.title}</h1>      
    </div>
  )
};

export default MovieCard;
