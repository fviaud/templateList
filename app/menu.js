"use client"
import * as React from "react"
import Link from "next/link"
import { Stack } from "@mui/material"

function Menu() {
  return (
    <Stack direction="row" spacing={2}>
      <div>icon</div>
      <div>search</div>
      <div>Login</div>
    </Stack>
  )
}

export default Menu
