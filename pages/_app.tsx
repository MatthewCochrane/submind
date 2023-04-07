import '@/styles/globals.css'
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from 'next/app'
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ClerkProvider {...pageProps} >
          <Navbar/>
        <Component {...pageProps} />
      </ClerkProvider>
  )
}
