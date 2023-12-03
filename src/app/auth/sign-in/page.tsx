import React from 'react'
import ButtonSignIn from '@/components/ButtonSignIn'
import { Typography } from '@mui/material'

export default async function SignIn({
  searchParams,
}: {
  searchParams?: Record<'callbackUrl' | 'error', string>
}) {
  console.log(searchParams?.error !== '')
  return (
    <>
      {searchParams?.error && <Typography>{searchParams?.error}</Typography>}
      <ButtonSignIn callbackUrl={searchParams?.callbackUrl}>
        Sign In
      </ButtonSignIn>
    </>
  )
}
