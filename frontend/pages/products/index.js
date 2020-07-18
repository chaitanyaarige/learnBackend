import Link from 'next/link'
import productListing from '../../components/ProductListing/productListing.js'
import DefaultLayout from 'layouts'


export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <productListing></productListing>
    </>
  )
}
