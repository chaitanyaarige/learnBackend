import Link from 'next/link'
import ProductListing from '../../components/ProductListing/productListing'
// import DefaultLayout from 'layouts'


export default function FirstPost() {
  return (
    <div>
      <div> <Link href="/"> Back To Home </Link></div>
      <div>This page will have all Products Listed with Categories</div>

      <ProductListing />
    </div>
  )
}
