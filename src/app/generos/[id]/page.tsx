import { getMoviesByGender } from "@/app/lib/movieServies";
import PaginationNav from "@/app/ui/pagination";
import MovieCard from "@/app/ui/movie/movie-cards";
export default async function Page({params}:{params:{id:number}}) {
    const movies = await getMoviesByGender(params.id)
    return (
        <>
            <PaginationNav pageCount={movies.length}></PaginationNav>
            <div className='grid grid-flow-row  gap-8  px-10 justify-center ' style={{gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))"}} >
                {movies.map(m=><a key={m.id} href={`/movie/${m.id}`}><MovieCard movie={m}></MovieCard></a>)}
            </div>
            <PaginationNav pageCount={movies.length}></PaginationNav>
        </>
  )
};