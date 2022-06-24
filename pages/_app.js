import '../styles/globals.css'
import LogContextProvider from './api/Context'

function MyApp({ Component, pageProps }) {
  return(
    <LogContextProvider>
    <Component {...pageProps} />
    </LogContextProvider>
  )
}

export default MyApp
