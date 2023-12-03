'use client'

import { TTicket } from '@/@types/ticket'
import React, { useState } from 'react'
import TicketCard from './TicketCard'
import { Grid, Typography } from '@mui/material'

export interface IListTicketsProps {
  tickets: TTicket[]
}

export default function ListTickets({
  tickets: propTickets,
}: IListTicketsProps) {
  const [tickets, setTickets] = useState(propTickets)
  return (
    <>
      <Grid container justifyContent="center" alignItems="center" gap={1}>
        {tickets.map((ticket, i) => (
          <Grid key={i} item xs={10} md={5}>
            <TicketCard
              onTopTicketClick={(t) => {
                setTickets(
                  tickets.map((setT) => {
                    return setT === t ? { ...t, used: true } : setT
                  })
                )
              }}
              ticket={ticket}
              topSection={
                <>
                  <Typography textTransform="uppercase">
                    Your Good Dentist
                  </Typography>
                  <Typography>Let&#39;s put a smile on that face</Typography>
                </>
              }
              bottomSection={
                <Typography
                  variant="h1"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {ticket.code}
                </Typography>
              }
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
