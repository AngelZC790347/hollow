'use client'

import { useState } from "react"
import { ArrowMenu } from "./arrow"
import Link from "next/link"
const genders =[
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
] 
export function NavigationHidden(){
    const [isVisible,setVisible] = useState(false)        
    let rotate = isVisible?"rotate-180":"rotate-0"
    return (
    <li onClick={(e)=>setVisible(!isVisible)} className='group relative block pr-12 text-center float-end hover:text-red-400'>Generos<span  className={`${rotate} absolute right-4 top-2`}><ArrowMenu></ArrowMenu></span>
        <ul style={{display:isVisible?"flex":"none" }} className="[&>*:last-child]:pb-6 !text-white  absolute -translate-x-5 flex-col gap-3 space- mt-2 bg-slate-800 w-[140px] px-1 py-3 text-center">
        {genders.map(g=>
            <Link className='hover:text-red-400 py-1 block last:only' key={g.id} href={`/generos/${g.id}`}>{g.name}</Link>
        )}
    </ul>    
    </li>
    )
}