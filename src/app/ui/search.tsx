'use client'
const Search = () => {
    function handleChange(value:string){
        console.log(value)
    }
    return (
        <div className="mr-16 px-56">
        <input type="search"  placeholder="Some Movie" className="bg-slate-800 w-full px-5 py-2 "  onChange={(e)=>handleChange(e.target.value)}/>
        </div>    
    )
};

export default Search;
