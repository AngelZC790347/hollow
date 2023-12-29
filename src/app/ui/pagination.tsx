"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Pagination, PaginationItem } from "@mui/material";
import Link from "next/link";

import React from "react";
import { LinkProps } from "next/link";
import { pages } from "next/dist/build/templates/app-page";
import { usePathname } from "next/navigation";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
export function PaginationNav(props: { pageCount: number }) {
  const pathName = usePathname();
  return (
    <div>
      <aside className="my-7 text-clip text-white flex flex-row justify-center w-full">
        <ThemeProvider theme={theme}>
          <Pagination
            count={props.pageCount}
            variant="outlined"
            color="secondary"
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                href={`${pathName}/${
                  item.page === 1 ? "" : `?page=${item.page}`
                }`}
                {...item}
              ></PaginationItem>
            )}
          ></Pagination>
        </ThemeProvider>
      </aside>
    </div>
  );
}

export default PaginationNav;
