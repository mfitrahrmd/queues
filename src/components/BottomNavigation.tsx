'use client'

import {
  BottomNavigation as MUIBottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material'
import { styled } from '@mui/material'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import ListIcon from '@mui/icons-material/ListOutlined'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumberOutlined'
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined'
import MoreIcon from '@mui/icons-material/MoreHorizOutlined'
import { useState } from 'react'

const PaperStyled = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))

export default function BottomNavigation() {
  const [activeNav, setActiveNav] = useState(0)
  return (
    <>
      <PaperStyled
        sx={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          right: '0',
        }}
        elevation={3}
      >
        <MUIBottomNavigation
          showLabels
          value={activeNav}
          onChange={(_, newNav) => {
            setActiveNav(newNav)
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Directory" icon={<ListIcon />} />
          <BottomNavigationAction
            label="Tickets"
            icon={<ConfirmationNumberIcon />}
          />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="More" icon={<MoreIcon />} />
        </MUIBottomNavigation>
      </PaperStyled>
    </>
  )
}
