'use client'

import { Button, Drawer, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/PersonOutline'
import TimerIcon from '@mui/icons-material/TimerOutlined'

export default function NoQueue() {
  const [timeNow, setTimeNow] = useState<string>('')
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const ev = setInterval(() => {
      setTimeNow(
        new Date().toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        })
      )
    }, 1000)

    return () => {
      clearInterval(ev)
    }
  }, [])

  return (
    <>
      <Box
        component="section"
        sx={{
          py: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '80vh',
        }}
      >
        <Typography variant="caption" color="grey">
          {timeNow}
        </Typography>
        <Typography
          variant="subtitle1"
          textTransform="uppercase"
          fontWeight="500"
        >
          you dont have any queue
        </Typography>
        <Paper
          elevation={0}
          sx={{
            bgcolor: 'transparent',
            mt: 12,
            width: '80%',
            textAlign: 'center',
          }}
        >
          <Button
            variant="outlined"
            onClick={() => {
              setDrawerOpen(true)
            }}
          >
            Make a Queue Now
          </Button>
        </Paper>
      </Box>
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false)
        }}
      >
        <Grid container pt={4}>
          <Grid item xs={6} textAlign="center">
            <PersonIcon />
            <Typography variant="subtitle1">People Ahead</Typography>
            <Typography variant="h4" fontWeight="700">
              3
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <TimerIcon />
            <Typography variant="subtitle1">Est. Waiting Time</Typography>
            <Typography variant="h4" fontWeight="700">
              32 Mins
            </Typography>
          </Grid>
          <Grid item xs={12} mt={4}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => {}}
              sx={{
                borderRadius: '0',
              }}
            >
              Queue
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </>
  )
}
