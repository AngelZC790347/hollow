import Image from 'next/image'
import movies from "../../mock/Movies.json"
import MovieCard from './ui/movie/movie-cards'
export default function Home() {    
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='grid grid-flow-row grid-cols-3 gap-8'>
        {movies.map(m=><a href={`/movie/${m.id}`} key={m.id}> <MovieCard movie={m}></MovieCard></a>)}
      </div>
    </main>
  )
}
