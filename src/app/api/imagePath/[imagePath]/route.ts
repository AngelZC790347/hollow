import { getImageMovieFromPath } from "@/app/lib/movieServies"

export async function GET(req:Request,{params}:{params:{imagePath:string}}) {
    const stream = await getImageMovieFromPath(params.imagePath)        
    new Response(stream)
}
