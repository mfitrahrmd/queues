'use client'

import { Button, Input } from '@mui/material'
import { signIn } from 'next-auth/react'
import React, { PropsWithChildren, useState } from 'react'

export default function ButtonSignIn({
  children,
  callbackUrl,
}: PropsWithChildren<{ callbackUrl?: string }>) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Input
        name="email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <Button
        onClick={async () => {
          setLoading(true)
          try {
            await signIn('email', {
              redirect: true,
              callbackUrl: callbackUrl || '/',
              email,
            })
          } catch (error) {
            console.log('an error')
            console.log(error)
          } finally {
            setLoading(false)
          }
        }}
      >
        {loading ? 'loading..' : children}
      </Button>
    </>
  )
}
