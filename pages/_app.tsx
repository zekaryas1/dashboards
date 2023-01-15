import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "@/components/layout/layout";
import {Inconsolata} from "@next/font/google";
import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";

const inconsolata = Inconsolata({
    weight: '400',
    subsets: ['latin'],
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({Component, pageProps}: AppPropsWithLayout) {

    const getLayout = Component.getLayout ?? ((page) => {
        return <main className={inconsolata.className}>
            <Layout><Component {...pageProps} /></Layout>
        </main>
    })


    return getLayout(<Component {...pageProps} />)

}
