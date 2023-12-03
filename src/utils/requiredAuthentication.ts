import { JWT, getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'

export default async function requiredAuthentication(
  req: NextRequest
): Promise<{ token: JWT | null; result: boolean }> {
  const token = await getToken({ req })

  if (!token) {
    return {
      result: false,
      token: null,
    }
  }

  return {
    result: true,
    token,
  }
}
