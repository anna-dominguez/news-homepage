import '@/styles/globals.css'
import Head from 'next/head'

const App = ({ Component, pageProps }) => (
  <div
    className="grid w-full h-full justify-center px-4 py-7 lg:px-[165px] lg:py-[97px]
               text-darkSpaceBlue bg-[#F2F2F2]"
  >
    <Head>
      <title>News Homepage</title>
    </Head>
    <Component {...pageProps} />{' '}
  </div>
)

export default App
