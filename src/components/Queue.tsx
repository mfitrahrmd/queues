'use client'

import { Box, Icon, Stack, Typography } from '@mui/material'
import TicketCard from '@/components/TicketCard'
import { TTicket } from '@/@types/ticket'
import { motion } from 'framer-motion'
import { useState } from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospitalOutlined'
import Barcode from 'react-barcode'

export default function Queue({ ticket: ticketProp }: { ticket: TTicket }) {
  const [ticket, setTicket] = useState(ticketProp)
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <TicketCard
          topSection={
            <Box>
              <Icon>
                <LocalHospitalIcon />
              </Icon>
              <Typography variant="subtitle1">City Hospital</Typography>
              <Typography variant="h3" fontWeight="bold">
                AA1
              </Typography>
            </Box>
          }
          bottomSection={
            <Box>
              <Box display="flex" justifyContent="space-between">
                <Stack direction="column" alignItems="center" flex={1}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    30m
                  </Typography>
                  <Typography variant="caption">Est. Waiting Time</Typography>
                </Stack>
                <Stack direction="column" alignItems="center" flex={1}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Waiting
                  </Typography>
                  <Typography variant="caption">Status</Typography>
                </Stack>
              </Box>
              <Barcode
                value="https://yesno.wtf/api/"
                width={1}
                displayValue={false}
              />
            </Box>
          }
          ticket={ticket}
          onTopTicketClick={(t) => {
            setTicket((prev) => ({ ...prev, used: true }))
          }}
        />
      </motion.div>
    </>
  )
}
