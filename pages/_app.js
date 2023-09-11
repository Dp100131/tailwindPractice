import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <section className='bg-blue-200 min-h-screen grid place-content-center'>
      <Component {...pageProps} />
    </section>
    
  )
}
