import { getPopularMovies } from "@/app/lib/movieServies";
export async function GET(req:Request) {   
    const data = await getPopularMovies()
    return new Response(JSON.stringify(data))
}