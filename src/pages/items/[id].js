import { api } from 'services'
import Layout from 'components/Layout'
import Categories from 'components/Categories'
import Image from 'next/image'
import Head from 'next/head'
import { conditionTranslate } from '@helpers'
import { html } from 'common-tags'
import styles from 'styles/Item.module.css'

export default function ItemDetail ({ data }) {
  return (
    <Layout
      title={data.item.title}
      typeDescription="item"
      item={data.item.title}
    >
      <Head>
        <meta name="twitter:site" content="Mercado Libre" />
        <meta name="twitter:title" content={data.item.title} />
        <meta name="twitter:description" content={html`${data.item.description}`} />
        <meta property="og:description" content={html`${data.item.description}`} />
        <meta property="og:title" content={data.item.title} />
        <meta property="og:image" content={data.item.picture} />
      </Head>
      <Categories
        categories={data.categories || []}
      />
      <div className="main-container">
        <div className={styles.product}>
          <div className={styles.image}>
            <Image src={data.item.picture} width={410} height={500} alt="Image Product" />
          </div>
          <div className={styles['top-wrapper']}>
            <span className={styles.subtitle}>
              {conditionTranslate(data.item.condition)} - {data.item.sold_quantity} vendidos
            </span>
            <h1>{data.item.title}</h1>
            <span className={styles.price}>
              $ {data.item.price.amount}
            </span>
            <div>
              <button className={styles['pay-button']}>Comprar</button>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <h2>Descripción del producto</h2>
          <p>{data.item.description}</p>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps ({ query }) {
  const { data } = await api.get(`/items/${query.id}`)
  return {
    props: {
      data
    }
  }
}
