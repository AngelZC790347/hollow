'use client'
import {createTheme,ThemeProvider} from "@mui/material/styles"
import { Pagination,PaginationItem} from "@mui/material";
import Link from "next/link";
import React from "react";
import { LinkProps } from "next/link";
const theme = createTheme({
    palette:{
      mode:"dark"
    }
  })
const PaginationNav = (props:{pageCount:number}) => {
  return (
    <div>
       <aside  className="my-7 text-clip text-white flex flex-row justify-center w-full">    
        <ThemeProvider theme={theme}>
            <Pagination count={props.pageCount} variant="outlined" color="secondary"  renderItem={(item)=>(
                <PaginationItem component={React.forwardRef<HTMLAnchorElement, Partial<LinkProps>>(
                    (props, ref) => (
                      <Link href={props.href!} {...props} ref={ref as any} />
                    )
                  )}
                 href={`./${item.page === 1 ? '' : `?page=${item.page}`}`}
                {...item}></PaginationItem>
            )}>                
            </Pagination>                        
        </ThemeProvider>          
        
      </aside>
    </div>
  )
};

export default PaginationNav;
