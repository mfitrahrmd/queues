import { Suspense } from 'react'
import { Paper, Skeleton, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import ActiveQueue from './ActiveQueue'
import PastQueues from './PastQueues'

export default async function Me() {
  return (
    <>
      <Paper
        component="main"
        square
        elevation={0}
        sx={{
          bgcolor: 'primary.main',
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="xl">
          <Suspense
            fallback={
              <Skeleton variant="rectangular" width="100%" height="300px" />
            }
          >
            <ActiveQueue />
          </Suspense>
        </Container>
        <Paper
          square
          sx={{
            bgcolor: 'white',
            minHeight: '1000px',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            mt: 4,
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              py: 4,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Past Queues</Typography>
              <Typography fontWeight="bold">View All &#62;</Typography>
            </Stack>
            <Suspense
              fallback={
                <Skeleton variant="rectangular" width="100%" height="150px" />
              }
            >
              <PastQueues />
            </Suspense>
          </Container>
        </Paper>
      </Paper>
    </>
  )
}
