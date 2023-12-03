import Queue from '@/components/Queue'
import { TTicket } from '@/@types/ticket'

export default async function ActiveQueue() {
  const data = await new Promise<TTicket>((res) =>
    setTimeout(() => res({ code: 'AA1', used: false }), 1000)
  )
  return <Queue ticket={data} />
}
