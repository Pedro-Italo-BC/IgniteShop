import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app';
import { Header } from '../components/Header';
import { CheckoutProvider } from '../contexts/checkoutContext';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CheckoutProvider>
      <Container>
        <Header/> 
        <Component {...pageProps} />
      </Container>
  </CheckoutProvider>
  )
}
