import { Movie } from "../lib/data"
import { getPopularMovies } from "../lib/movieServies"
import MovieCard from "../ui/movie/movie-cards"
import PaginationNav from "../ui/pagination"
export default async function Page() {
  const popularMovies = await getPopularMovies()
  return (
    <>
    <PaginationNav pageCount={50}></PaginationNav>
    <div className='grid grid-flow-row  gap-8  px-10 justify-center ' style={{gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))"}} >
      {popularMovies.map(m=><a key={m.id} href={`/movie/${m.id}`}><MovieCard movie={m}></MovieCard></a>)}
    </div>
    <PaginationNav pageCount={50}></PaginationNav>
    </>
  )
};