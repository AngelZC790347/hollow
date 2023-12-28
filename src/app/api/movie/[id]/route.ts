import { getMovieById } from "@/app/lib/movieServies"
export async function GET(req:Request,{params}:{params:{id:number}}) {              
    return await getMovieById(params.id)
}