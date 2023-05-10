"use client"
import Menu from "./menu"
import Menu2 from "./menu2"
import Grid from "@mui/material/Grid"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next Layout Example</title>
      </head>
      <body>
        {/* <header>
          <Menu />
        </header> */}
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Menu2 />
          </Grid>
          <Grid item xs={10}>
            <div>{children}</div>
          </Grid>
        </Grid>
      </body>
    </html>
  )
}
