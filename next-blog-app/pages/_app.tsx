import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { ThemeProvider } from '../utils/theme'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp