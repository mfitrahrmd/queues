import prisma from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'

export const authOptions: AuthOptions = {
  providers: [
    EmailProvider({
      server: {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: 'tgcfitrah26@gmail.com',
          pass: 'pqqb frsa gamp vlfe ',
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        const u = await prisma.user.findFirst({
          where: {
            email: user.email,
          },
          select: {
            roles: {
              select: {
                role: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        })

        token.id = user.id
        token.address = user.address

        if (u) {
          token.roles = u.roles.map((r) => r.role.name)
        }
      }

      return token
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id
        session.user.address = token.address
        session.user.roles = token.roles
      }

      return session
    },
  },
  debug: true,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt', //currently support jwt
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
