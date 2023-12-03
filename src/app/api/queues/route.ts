import prisma from '@/lib/prisma'
import { DEFAULT_LIMIT } from '@/utils/constants'
import moment from 'moment'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const limit = req.nextUrl.searchParams.get('limit')
  const page = req.nextUrl.searchParams.get('page')
  const queues = await prisma.queue.findMany({
    take: limit ? parseInt(limit) : DEFAULT_LIMIT,
    skip: page
      ? parseInt(page) * (limit ? parseInt(limit) : DEFAULT_LIMIT)
      : undefined,
    orderBy: {
      at: 'desc',
    },
  })

  return NextResponse.json(queues, {
    status: 200,
  })
}

export async function POST(req: NextRequest) {
  const token = await getToken({
    req,
  })

  if (!token) {
    return NextResponse.json(
      {
        message: 'unauthenticated',
      },
      {
        status: 401,
      }
    )
  }

  if (!token.roles.includes('customer')) {
    return NextResponse.json(
      {
        message: 'unauthorized',
      },
      {
        status: 403,
      }
    )
  }

  const today = moment()
    .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
    .toISOString(true)

  console.log(today)

  const latestQueueToday = await prisma.queue.findFirst({
    where: {
      at: {
        gt: today,
      },
    },
    orderBy: {
      at: 'desc',
    },
  })

  console.log(latestQueueToday)

  let code: string

  if (latestQueueToday) {
    code = (parseInt(latestQueueToday.code) + 1).toString()
  } else {
    code = '1'
  }

  const createdQueue = await prisma.queue.create({
    data: {
      code,
      customer: {
        connect: {
          id: token.id,
        },
      },
    },
  })

  return NextResponse.json(createdQueue, {
    status: 201,
  })
}
