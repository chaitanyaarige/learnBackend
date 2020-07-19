import Link from 'next/link'
import ProductListing from '../../components/ProductListing/productListing'
// import DefaultLayout from 'layouts'


export default function FirstPost() {
  return (
    <div>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <ProductListing />
    </div>
  )
}
