import { Movie } from "@/app/lib/data";
import MovieCard from "./movie-cards";
import { Suspense } from "react";
import { MovieCardSkeleton } from "../skeletons";
import { getOnBillBoardMovies } from "@/app/lib/movieServies";
const MovieList = async({query,currentPage}:{query:string,currentPage:number}) => {    
    //https://api.themoviedb.org/3/search/movie?query=gato%20con%20botas&include_adult=false&language=en-US&page=1
    let movies = await getOnBillBoardMovies({query:query,page:currentPage})
    console.log(movies)
    return (
        <>{movies.map(m=><a href={`/movie/${m.id}`} key={m.id}><MovieCard movie={m}></MovieCard></a>)}</>        
    )
};

export default MovieList;
