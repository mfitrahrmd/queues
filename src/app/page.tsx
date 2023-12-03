import prisma from '@/lib/prisma'
import { Box, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'

export default async function Home() {
  return (
    <>
      <Paper
        component="main"
        square
        elevation={0}
        sx={{
          color: 'primary.contrastText',
          bgcolor: 'primary.main',
          minHeight: '100vh',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box textAlign="center">
            <Typography fontFamily="cursive" variant="h3" fontWeight="bold">
              SimpleQ
            </Typography>
            <Typography fontWeight="900" mt={2}>
              A long overdue alternative to physical queues
            </Typography>
            <Typography variant="caption">
              Create and manage virtual queues instantly to help you and
              customers have a great business experience
            </Typography>
          </Box>
        </Container>
      </Paper>
    </>
  )
}
