'use client'
import { useState } from 'react'
import Image from 'next/image'
import movies from '../../../../mock/Movies.json'
import { PlayButton } from '@/app/ui/buttons'
export default function Page({params}:{params:{id:number}}) {
    const movie = movies.filter(m=>m.id == params.id)[0]
    const [isOnBillboard,setBillboard] = useState(true)
    // fetch(`https://hollow-videos.b-cdn.net/${movie.id}.mp4`,{mode:"no-cors"}).then(r=>setBillboard(r.status==200)).catch(err=>setBillboard(false))    
    return (
        <div className='px-3 w-full'>
        <h1 className='text-3xl text-center underline'>{movie.title}</h1>
        <div className='my-9 px-8 flex sm:flex-row flex-col overflow-hidden'>
            <Image width={200} className='my-4   w-full' height={500} src={"https://image.tmdb.org/t/p/original"+movie.poster_path} alt={`poster movie ${movie.title}`}></Image>
            <div className='px-12 flex flex-col justify-center align-middle'>
                <p>{movie.overview}</p>
                <span className='my-11 block mx-16'><PlayButton></PlayButton></span>                
            </div>            
        </div>
        <aside className='h-dvh px-1 py-24'>
            <div className='h-full shadow-xl border border-solid bg-slate-800 flex justify-center align-middle'>
                {isOnBillboard?
                <video id="videoPlayer" width="70%" controls className='py-3'>                    
                    <source src={`https://hollow-videos.b-cdn.net/${movie.id}.mp4`} type="video/mp4" />
                    Video No encontrado
                </video>:
                <p className='text-center inline py-6' style={{margin:"auto"}}>Video Is Removed</p>
                }
            </div>
        </aside>
        </div>
    )
};