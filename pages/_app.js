import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SSRProvider } from 'react-bootstrap'
import Analytics from '../components/Analytics'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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