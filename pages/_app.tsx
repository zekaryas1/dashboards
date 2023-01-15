import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "@/components/layout/layout";
import {Inconsolata} from "@next/font/google";

const inconsolata = Inconsolata({
    weight: '400',
    subsets: ['latin'],
})

export default function App({Component, pageProps}: AppProps) {

    // TODO:// fix type
    // @ts-ignore
    if (Component.getLayout) {
        // @ts-ignore
        return Component.getLayout(<Component {...pageProps} />)
    }

    return <main className={inconsolata.className}>
        <Layout><Component {...pageProps} /></Layout>
    </main>

}
