const baseURL = "https://api.themoviedb.org/3/"
const authHeader = {
    "Authorization":`Bearer ${process.env.API_KEY}`
}
export async function GET({params}:{params:{imagePath:string}}) {
    console.log(baseURL+"movie/872585/images/"+params.imagePath)
    const stream = await (fetch("https://image.tmdb.org/t/p/original/"+params.imagePath,{        
        headers:authHeader,    
    }).then(resy=>{        
        console.log(resy.status)
        return resy.json()
    }))        
    console.log(stream)
    new Response(stream)
}
