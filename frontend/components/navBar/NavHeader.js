import Link from 'next/link'

const NavHeader = () => {
  return (
    <nav>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/products">
        <a>Product Listing</a>
      </Link>
      <Link href="/product-description">
        <a>Product description</a>
      </Link>
      <style jsx>
        {`
          a {
            margin-right: 25px;
          }
        `}
      </style>
    </nav>
  )
}

export default NavHeader
