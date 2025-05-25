import { type NextRequest } from 'next/server'
// Update the import path below if the file is located elsewhere
import { updateSession } from '@/utils/supabase/middleware'
// If the file does not exist, create '../utils/supabase/middleware.ts' and export 'updateSession' from it.

export async function middleware(request: NextRequest) {
  // update user's auth session
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}