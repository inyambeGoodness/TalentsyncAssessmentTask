import Layout from '@/components/layout/layout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  variable: "--Montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});


export default function App({
  Component,
  pageProps }: AppProps) {
  return (
    <Layout>
      <main className={`bg-white text-black ${roboto.className} `}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
