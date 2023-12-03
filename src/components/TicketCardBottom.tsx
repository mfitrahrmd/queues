import { Card, CardContent, CardProps } from '@mui/material'
import { PropsWithChildren } from 'react'

export default function TicketCardBottom({
  children,
  sx,
  ...props
}: PropsWithChildren<CardProps>) {
  return (
    <Card
      sx={{
        color: 'primary.main',
        textAlign: 'center',
        mask: `radial-gradient(circle at left top, transparent 20px, black 20px) left,
                                    radial-gradient(circle at right top, transparent 20px, black 20px) right`,
        maskSize: '51% 100%',
        maskRepeat: 'no-repeat',
        borderTop: '1px dashed',
        minWidth: '300px',
        ...sx,
      }}
      {...props}
    >
      <CardContent>{children}</CardContent>
    </Card>
  )
}
