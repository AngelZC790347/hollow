import { getMovieById } from "@/app/lib/movieServies"
export async function GET(req:Request,{params}:{params:{id:number}}) {                  
    return new Response(JSON.stringify(await getMovieById(params.id)))
}