// export { default } from 'next-auth/middleware'
// export const config = { matcher: ['/me'] }
import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

const requiredAuthentication: string[] = ['/me', '/admin']
const requiredAdmin: string[] = ['/admin']

export default async function middleware(req: NextRequest, e: NextFetchEvent) {
  if (requiredAuthentication.some((p) => req.nextUrl.pathname.startsWith(p))) {
    withAuth({})
    const token = await getToken({ req })

    if (!token) {
      const url = new URL('/auth/sign-in', req.url)
      url.searchParams.set('callbackUrl', encodeURI(req.url))
      url.searchParams.set('error', 'you need to sign in to do that')

      return NextResponse.redirect(url)
    }

    if (requiredAdmin.some((p) => req.nextUrl.pathname.startsWith(p))) {
      if (!token.roles.includes('admin')) {
        const url = new URL('/unauthorized', req.url)

        return NextResponse.rewrite(url)
      }
    }
  }

  return NextResponse.next()
}

// export default withAuth(function (req, e) {
//   if (requiredAuthentication.includes(req.nextUrl.pathname)) {
//     if (!req.nextauth.token) {
//       return NextResponse.redirect('/unauthenticated', {
//         status: 401,
//       })
//     }

//     if (requiredAdmin.includes(req.nextUrl.pathname)) {
//       if (!req.nextauth.token.roles.includes('admin')) {
//         return NextResponse.rewrite('/unauthorized', {
//           status: 403,
//         })
//       }
//     }

//     return NextResponse.next()
//   }

//   return NextResponse.next()
// })
