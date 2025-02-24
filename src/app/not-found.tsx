import Link from 'next/link'

export default function RootNotFound() {
  return (
    <main className='not-found'>
      <h1>Page not found</h1>
      <p>
        Click <Link href='/'>Here</Link> to go to Home
      </p>
    </main>
  )
}
