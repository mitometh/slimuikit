import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Management Platform - Modern Design System</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}