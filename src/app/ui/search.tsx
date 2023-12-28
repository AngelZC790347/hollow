'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";


const Search = () => {
    const searchParams = useSearchParams()    
    const {replace} = useRouter()
    const  handleChange= useDebouncedCallback((term:string)=>{        
        const params = new URLSearchParams(searchParams);        
        params.set('page', '1');
        if (term) {
            params.set('query', term);
          } else {
            params.delete('query');
          }                      
        replace(`${'/'}?${params.toString().replaceAll("+","%20")}`);
    },300)
    return (
        <div className="flex flex-row justify-center align-middle">
        <input defaultValue={searchParams.get('query')?.toString()} type="search"  placeholder="Some Movie" className="bg-slate-800 w-1/2   px-8 py-2 "  onChange={(e)=>handleChange(e.target.value)}/>
        </div>    
    )
};

export default Search;
