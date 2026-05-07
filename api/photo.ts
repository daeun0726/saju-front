export const config = { runtime: 'edge' }

export default async function handler(request: Request) {
  const url = new URL(request.url)
  const fileId = url.searchParams.get('id')

  if (!fileId) {
    return new Response('Missing id', { status: 400 })
  }

  const upstream = await fetch(
    `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`
  )

  if (!upstream.ok) {
    return new Response('Not found', { status: 404 })
  }

  const contentType = upstream.headers.get('content-type') ?? 'image/jpeg'
  const body = await upstream.arrayBuffer()

  return new Response(body, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
