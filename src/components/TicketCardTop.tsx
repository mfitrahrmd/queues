import { TTicket } from '@/@types/ticket'
import { Card, CardContent } from '@mui/material'
import React, { PropsWithChildren } from 'react'

export default function TicketCardTop({
  ticket,
  onClick,
  children,
}: PropsWithChildren<{ ticket: TTicket; onClick: (ticket: TTicket) => void }>) {
  return (
    <Card
      sx={{
        color: 'primary.main',
        textAlign: 'center',
        mask: `radial-gradient(circle at left bottom, transparent 20px, black 20px) left,
                                        radial-gradient(circle at right bottom, transparent 20px, black 20px) right`,
        maskSize: '51% 100%',
        maskRepeat: 'no-repeat',
        borderBottom: '1px dashed',
        minWidth: '300px',
      }}
      onClick={() => {
        onClick(ticket)
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  )
}
