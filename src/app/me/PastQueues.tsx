import { TTicket } from '@/@types/ticket'
import { Box, List, ListItem, Typography } from '@mui/material'

export default async function PastQueues() {
  const data = await new Promise<TTicket[]>((res) =>
    setTimeout(
      () =>
        res([
          { code: 'AA1', used: false },
          { code: 'AA2', used: false },
        ]),
      5000
    )
  )
  return (
    <List>
      {Array.from(Array(5)).map((_, i, arr) => (
        <ListItem
          key={i}
          divider={i < arr.length - 1}
          sx={{
            px: 0,
          }}
        >
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            accusamus maiores molestiae soluta mollitia fugit perspiciatis quae
            qui similique dolorum.
          </Typography>
        </ListItem>
      ))}
    </List>
  )
}
