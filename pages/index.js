import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Hero from '../components/Hero'
import Investments from '../components/Investments'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Milk Equity</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Milk Equity' /*message='We Make Money'*/ />
      <About subheading='We Make Money'/>
      <Investments subheading='Investments'/>
    </div>
  )
}
