import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Search from './ui/search'
import {AppRouterCacheProvider} from "@mui/material-nextjs/v14-appRouter"
import {ArrowMenu} from './ui/arrow'
import { NavigationHidden } from './ui/navigations'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Hollow',
  description: 'Its a Streaming app ',    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className=' h-14 mb-12 bg-slate-800 text-xl'>
          <ul className='flex flex-row gap-12 justify-end  h-full items-center'>
            <Link className="hover:text-red-400" href={'/'}>Incio</Link>
            <Link className='hover:text-red-400' href={'./popular'}>Populares</Link>
            <NavigationHidden></NavigationHidden>
          </ul>
        </nav>
        <div className='my-16'>
          <Search></Search>
        </div>
        <AppRouterCacheProvider >         
            {children}              
        </AppRouterCacheProvider>                          
        </body>
    </html>
  )
}
