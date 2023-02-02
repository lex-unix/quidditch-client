export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, {
    ...init,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
  })
  return res.json()
}
