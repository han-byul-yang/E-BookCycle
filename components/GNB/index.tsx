import Image from 'next/image'

import HomeIcon from 'public/svg/home.svg'
import BullhornIcon from 'public/svg/bullhorn.svg'
import StarIcon from 'public/svg/star.svg'
import UserIcon from 'public/svg/user.svg'
import styles from './gnb.module.scss'

const GNB = () => {
  return (
    <nav className={styles.gnb}>
      <Image className={styles.icon} src={HomeIcon} alt='homeIcon' width='25' height='25' />
      <Image className={styles.icon} src={BullhornIcon} alt='bullhornIcon' width='25' height='25' />
      <Image className={styles.icon} src={StarIcon} alt='starIcon' width='25' height='25' />
      <Image className={styles.icon} src={UserIcon} alt='userIcon' width='25' height='25' />
    </nav>
  )
}

export default GNB
