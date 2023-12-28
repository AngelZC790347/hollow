import movies from "@/../mock/Movies.json"
import { createReadStream, existsSync } from "fs"
function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()
      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}
export async function GET(req: Request,{params}:{params:{id:number}}) {
  const movie = movies.filter(m=>m.id == params.id)[0]
  if(!movie){
    return new Response("not found",{status:404})
  }
  if(!existsSync(`./../videos/${movie.id}.mp4`)){
    return new Response("Not Found",{status:404})
  }
  let video = createReadStream(`./../videos/${movie.id}.mp4`) 
  let stream = iteratorToStream(video.iterator())
  return new Response(stream)
}