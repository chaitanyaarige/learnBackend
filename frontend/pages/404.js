import Head from 'next/head'
import Navheader from '../components/navBar/NavHeader.js'
import Footer from '../components/navBar/Footer.js'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pharmacy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navheader></Navheader> */}
      THIS is 404 Page
      {/* <Footer></Footer> */}
    </div>
  )
}
