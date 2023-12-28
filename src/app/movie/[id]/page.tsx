import Image from 'next/image'
import { PlayButton } from '@/app/ui/buttons'
import { Suspense } from 'react'
import {MoviePageSkeleton} from '@/app/ui/skeletons'
import { getMovieById } from '@/app/lib/movieServies'
export default async function Page({params}:{params:{id:number}}) {
    const movie = await getMovieById(params.id)
    return (    
        <Suspense fallback={<MoviePageSkeleton></MoviePageSkeleton>}>   
        <div className='px-3 w-full'>
        <h1 className='text-4xl text-center underline'>{movie.title}</h1>
        <div className='my-9 px-8 flex sm:flex-row flex-col overflow-hidden'>         
            <Image width={200} className='my-4 px-4  w-full' height={200} src={"https://image.tmdb.org/t/p/original"+movie.backdrop_path} alt={`poster movie ${movie.title}`}></Image>
            <div className='px-12 flex flex-col justify-center align-middle'>
                <p className='text-lg'>{movie.overview}</p>
                <span className='my-11 block mx-16'><PlayButton></PlayButton></span>                
            </div>            
        </div>
        <aside className='h-dvh px-1 py-24'>
            <div className='h-full shadow-xl border border-solid bg-slate-800 flex justify-center align-middle'>                
                <video id="videoPlayer" width="70%" controls className='py-3'>                    
                    <source src={`https://hollow-videos.b-cdn.net/${movie.id}.mp4`} type="video/mp4" />                
                </video>:                
            </div>
        </aside>
        </div>
        </Suspense> 
    )
};