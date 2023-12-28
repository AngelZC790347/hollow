import { Movie } from "./data"
import TMBDB_ENDPOINT from "./utils/config"
export async function getOnBillBoardMovies({query="",page}:{query:string,page:number}) {
    const url = query !=='' ?`search/movie?query=${query?.replaceAll(" ","%20")}&include_adult=false&language=en-US&page=${page}`:`movie/now_playing?language=en-US&page=${page}`    
    let data = await (fetch(TMBDB_ENDPOINT.baseURL+url,{
        headers:TMBDB_ENDPOINT.authHeader
    }).then(text=>text.json())) 
    return data["results"] as [Movie]
}
export async function getPopularMovies() {
    let data = await (fetch(TMBDB_ENDPOINT.baseURL+"movie/popular",{
        headers:TMBDB_ENDPOINT.authHeader,
        method:'GET'
    }).then(text=>text.json()))   
    return data["results"] as [Movie]
}
export async function getMovieById(id:number) {
    let data = await (fetch(TMBDB_ENDPOINT.baseURL+`movie/${id}`,{
        headers:TMBDB_ENDPOINT.authHeader,
    }).then(text=>text.json())) as Movie
    return data
}
export async function getImageMovieFromPath(imagePath:string) {
    const stream = await (fetch("https://image.tmdb.org/t/p/original/"+imagePath,{        
        headers:TMBDB_ENDPOINT.authHeader,    
    }).then(res=>{                
        return res.json()
    }))     
    return stream   
}
//'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10402'
export async function getMoviesByGender(id:number){
    let data = await (fetch(TMBDB_ENDPOINT.baseURL+`discover/movie?include_adult=false&include_0video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`,{
        headers:TMBDB_ENDPOINT.authHeader,        
    }).then(text=>text.json()))   
    return data["results"] as [Movie]
}
