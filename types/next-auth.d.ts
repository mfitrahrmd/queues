import { Role, UsersRoles } from '@prisma/client'
import NextAuth, { DefaultSession, DefaultUser, User } from 'next-auth'
import { UserAdapter, AdapterUser } from 'next-auth/adapters'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface User {
    id: string
    address?: string
  }

  interface Session {
    user: {
      id: string
      address?: string
      roles: string[]
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    address?: string
    roles: string[]
  }
}
