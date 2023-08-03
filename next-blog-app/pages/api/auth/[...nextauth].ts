import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { PrismaClient } from '@prisma/client'
import { NextAuthProviders } from '../../utils/nextAuthProviders'

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    ...NextAuthProviders
  ],
  callbacks: {
    async session(session, user) {
      session.userId = user.id
      return session
    },
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    },
  },
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.SECRET,
})