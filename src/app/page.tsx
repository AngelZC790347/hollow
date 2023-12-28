import MovieList from "./ui/movie/movie-list";
import PaginationNav from "./ui/pagination";
export default async function Home({searchParams}:{searchParams?:{page?:number,query:string}}) {  
  const currentPage = Number(searchParams?.page) || 1
  const query = searchParams?.query || '';
  async function  setCurrentPage(page:number){
    'use server'
    console.log(page);    
  }
  return(
    <main >
      <PaginationNav pageCount={182}></PaginationNav>
      <div className='grid grid-flow-row  gap-8 px-10' style={{gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))"}}>
          <MovieList query={query} currentPage={currentPage}></MovieList>                
      </div>
     <PaginationNav pageCount={182}></PaginationNav>
    </main>
  )
}
