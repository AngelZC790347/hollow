'use client'
const Search = () => {
    function handleChange(value:string){
        console.log(value)
    }
    return (
        <div className="text-center">
        <input type="search"  placeholder="Some Movie" className="w-3/5 bg-slate-800 w-full px-5 py-2 "  onChange={(e)=>handleChange(e.target.value)}/>
        </div>    
    )
};

export default Search;
