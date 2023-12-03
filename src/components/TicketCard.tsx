'use client'

import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { TTicket } from '@/@types/ticket'
import { AnimatePresence, motion } from 'framer-motion'
import TicketCardTop from './TicketCardTop'
import TicketCardBottom from './TicketCardBottom'

export interface ITicketCardProps {
  topSection: ReactNode
  bottomSection: ReactNode
  ticket: TTicket
  onTopTicketClick: (ticket: TTicket) => void
}

export default function TicketCard({
  topSection,
  bottomSection,
  onTopTicketClick,
  ticket,
}: ITicketCardProps) {
  return (
    <>
      <Box>
        <AnimatePresence>
          {!ticket.used && (
            <motion.div
              style={{
                transformOrigin: '100% 100%',
              }}
              variants={{
                cut: {
                  transform: 'rotate(40deg)',
                  transition: {
                    duration: 1,
                    ease: 'easeIn',
                  },
                },
                'fade-out': {
                  opacity: '0',
                  transition: {
                    duration: 1.5,
                    delay: 1,
                  },
                },
              }}
              exit={['cut', 'fade-out']}
              key={'top'}
              layout
            >
              <TicketCardTop ticket={ticket} onClick={onTopTicketClick}>
                {topSection}
              </TicketCardTop>
            </motion.div>
          )}
          <motion.div key={'bottom'} layout>
            <TicketCardBottom>{bottomSection}</TicketCardBottom>
          </motion.div>
        </AnimatePresence>
      </Box>
    </>
  )
}
