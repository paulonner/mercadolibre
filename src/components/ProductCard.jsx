import Image from 'next/image'
import Link from 'next/link'
import Shipping from 'assets/ic_shipping.png'
import { conditionTranslate } from '@helpers'
import styles from '../styles/Product.module.css'

const ProductCard = ({ item }) => {
  return (
    <Link href={`/items/${item.id}`}>
      <a>
        <div className={styles.product}>
          <div className={styles.picture}>
            <Image src={item.picture} width={180} height={180} alt={item.title} />
          </div>
          <div className={styles.description}>
            <div className={styles['product-price']}>
              <span>${item.price.amount}</span>
              {item.free_shipping ? <Image src={Shipping} alt="shipping" /> : null}
            </div>
            <div className={styles['product-description']}>
              <div>{item.title}</div>
              <div>{conditionTranslate(item.condition)}</div>
            </div>
          </div>
          <div className={styles['product-address']}>
            {item.address}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
