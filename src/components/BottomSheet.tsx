'use client'

import { Global } from '@emotion/react'
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Skeleton,
  Stack,
  SwipeableDrawer,
  Typography,
  styled,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import TicketCardBottom from './TicketCardBottom'

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}))

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}))

const DRAWER_BLEEDING = 56

const SwipeableDrawerMotion = motion(SwipeableDrawer)

export default function BottomSheet() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${DRAWER_BLEEDING}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawerMotion
        anchor="bottom"
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        onOpen={() => {
          setOpen(true)
        }}
        swipeAreaWidth={DRAWER_BLEEDING}
        disableSwipeToOpen={false}
        hysteresis={0.25}
        sx={{
          position: 'relative',
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: 0,
            translate: '0 -100%',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            visibility: 'visible',
            right: 0,
            left: 0,
            px: 2,
            py: 2,
          }}
        >
          <Puller />
          <Stack direction="row" justifyContent="space-between">
            <Typography>Past</Typography>
            <Typography fontWeight="bold">View All &#62;</Typography>
          </Stack>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            overflow: 'auto',
          }}
        >
          <List>
            {Array.from(Array(5)).map((_, i, arr) => (
              <>
                <ListItem key={i} divider={i < arr.length - 1}>
                  <TicketCardBottom
                    sx={{
                      width: '100%',
                      bgcolor: 'primary.main',
                      color: 'white',
                    }}
                  >
                    <Typography fontWeight="bold">Faridabad</Typography>
                    <Typography
                      variant="h3"
                      fontWeight="bold"
                    >{`AA${i}`}</Typography>
                  </TicketCardBottom>
                </ListItem>
              </>
            ))}
          </List>
        </StyledBox>
      </SwipeableDrawerMotion>
    </>
  )
}
