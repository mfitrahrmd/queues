import React, { ReactElement, ReactNode } from 'react'

export default function Layout({
  analytics,
  dashboard,
  children,
}: {
  analytics: ReactNode
  dashboard: ReactNode
  children: ReactNode
}) {
  return (
    <>
      {dashboard}
      <div>Admin</div>
    </>
  )
}
