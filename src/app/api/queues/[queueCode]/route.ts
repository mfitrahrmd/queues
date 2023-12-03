import prisma from '@/lib/prisma'
import { NextApiRequest } from 'next'
import { RequestHandler } from 'next/dist/server/next'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params: { queueCode } }: { params: { queueCode: string } }
) {
  const queue = await prisma.queue.findUnique({
    where: {
      code: queueCode,
    },
  })

  if (!queue) {
    return NextResponse.json(
      {
        message: 'not found',
      },
      {
        status: 404,
      }
    )
  }

  return NextResponse.json(queue, {
    status: 200,
  })
}
