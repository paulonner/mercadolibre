import Image from 'next/image'
import IconSearch from 'assets/ic_Search@2x.png'
import styles from '../styles/Info.module.css'

const Info = ({ children }) => {
  return (
    <div className={styles.info}>
      <Image src={IconSearch} width={30} height={30} alt="info" />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Info
