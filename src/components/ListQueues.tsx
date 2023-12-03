'use client'

import { Button, List, ListItem, Paper, Stack, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import TicketCard from './TicketCard'
import { TTicket } from '@/@types/ticket'

const StackMotion = motion(Stack)
const TicketCardMotion = motion(TicketCard)

export default function ListQueues({
  tickets: ticketsProp,
}: {
  tickets: TTicket[]
}) {
  const [tickets, setTickets] = useState<TTicket[]>(ticketsProp)
  return (
    <>
      <StackMotion
        spacing={2}
        initial={{
          y: '50%',
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: 'anticipate',
        }}
      >
        <AnimatePresence presenceAffectsLayout>
          {tickets.map((ticket) => (
            <TicketCardMotion
              layout
              key={ticket.code}
              topSection={<Typography>{ticket.code}</Typography>}
              bottomSection={<Typography>Your Ticket</Typography>}
              ticket={ticket}
              onTopTicketClick={(t) => {
                setTickets((prevTickets) =>
                  [...prevTickets].map((pt) => {
                    if (pt === t) {
                      return {
                        ...pt,
                        used: true,
                      }
                    }
                    return pt
                  })
                )
              }}
            />
          ))}
        </AnimatePresence>
      </StackMotion>
    </>
  )
}
