import { useSearchParams } from "next/navigation"
import { getOnBillBoardMovies} from "@/app/lib/movieServies"
export async function GET(req:Request,res:Response){
    const params = req.url.split('/').pop()?.split('?').pop()
    console.log(params) 
    const search = new URLSearchParams(params)        
    const movies = await getOnBillBoardMovies({page:Number(search.get("page")),query:search.get("query")??""})
    return new Response(JSON.stringify(movies))
};
