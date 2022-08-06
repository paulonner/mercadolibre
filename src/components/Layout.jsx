import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Search from './Search'
import LogoML from '../assets/Logo_ML.png'
import { metaTag } from 'helpers'

const Layout = ({ children, ...props }) => {
  const meta = metaTag(props || {})
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="../ml.ico" />
      </Head>
      <header className="header">
        <div className="search-container">
          <Link href="/">
            <a>
              <Image src={LogoML} alt="Logo ML" />
            </a>
          </Link>
          <Search
            placeholder="Nunca dejes de buscar"
          />
        </div>
      </header>
      <div className="root">
        <main className="main">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
