import { useSearchParams } from "next/navigation"

const baseURL = "https://api.themoviedb.org/3/"
const authHeader = {
    "Authorization":`Bearer ${process.env.API_KEY}`
}
export async function GET(req:Request){
    const params = req.url.split('/').pop()?.split('?').pop()
    console.log(params)    
    const search = new URLSearchParams(params)
    console.log(search)
    let data = await (fetch(baseURL+`movie/popular?language=en-US&page=${search.get("page")}`,{
        headers:authHeader
    }).then(text=>text.json()))
    return new Response(data)
};
