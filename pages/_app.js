import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SSRProvider } from 'react-bootstrap'
import Analytics from '../components/Analytics'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} />
        <Analytics />
      </SSRProvider>
    </>
  )
}

export default MyApp