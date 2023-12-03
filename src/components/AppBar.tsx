'use client'

import {
  AppBarProps,
  Avatar,
  Box,
  Button,
  Container,
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined'

const hour = new Date().getHours()
let greet = 'Evening'

if (hour < 12) {
  greet = 'Morning'
} else if (hour < 18) {
  greet = 'Afternoon'
} else {
  greet = 'Evening'
}

export default function AppBar({
  signedIn,
  sx,
  ...props
}: { signedIn: boolean } & AppBarProps) {
  return (
    <>
      <MUIAppBar
        position="static"
        elevation={0}
        sx={{
          ...sx,
        }}
        {...props}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar
            sx={{
              py: 4,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            <Box display="flex" flexDirection="column">
              <Typography
                variant="subtitle1"
                fontWeight="500"
                textTransform="capitalize"
              >
                Good {greet}
              </Typography>
              <Typography variant="caption">
                How are you feeling today?
              </Typography>
            </Box>
            {signedIn ? (
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <NotificationsIcon fontSize="small" />
                <Avatar
                  sx={{
                    width: '28px',
                    height: '28px',
                  }}
                />
              </Box>
            ) : (
              <Box>
                <Button
                  variant="text"
                  sx={{
                    color: 'primary.contrastText',
                    textTransform: 'none',
                  }}
                >
                  Sign In / Sign Up
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </MUIAppBar>
    </>
  )
}
