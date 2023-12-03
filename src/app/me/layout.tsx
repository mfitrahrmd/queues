import BottomNavigation from '@/components/BottomNavigation'
import React, { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      {children}
      <BottomNavigation />
    </>
  )
}
