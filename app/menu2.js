import * as React from "react"

import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/Inbox"
import HomeIcon from "@mui/icons-material/Home"
import CommentIcon from "@mui/icons-material/Comment"
import PersonIcon from "@mui/icons-material/Person"
import MovieIcon from "@mui/icons-material/Movie"

import { useRouter, usePathname } from "next/navigation"

const items = [
  { icon: <HomeIcon />, name: "Home", path: "" },
  { icon: <PersonIcon />, name: "Users", path: "users" },
  { icon: <CommentIcon />, name: "Comments", path: "comments" },
  { icon: <MovieIcon />, name: "Movies", path: "movies" },
]

export default function SelectedListItem() {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedIndex, setSelectedIndex] = React.useState(items.findIndex((item) => `\/${item.path}` === pathname))

  const handleListItemClick = (event, index, path) => {
    setSelectedIndex(index)
    router.push(`/${path}`)
  }

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav">
        {items.map((item, index) => (
          <ListItemButton
            key={item.name}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index, item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}
