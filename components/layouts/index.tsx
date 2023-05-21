import { ReactElement, useState } from 'react'
import Image from 'next/image'

import GNB from 'components/GNB'

import AlarmIcon from 'public/svg/alarm.svg'
import BasketIcon from 'public/svg/basket.svg'
import SearchIcon from 'public/svg/search.svg'
import styles from './layouts.module.scss'

interface LayoutProps {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  const [isClickSearch, setIsClickSearch] = useState(false)

  const handleSearchItemClick = () => {
    setIsClickSearch((prevState) => !prevState)
  }

  return (
    <div className={styles.background}>
      <div className={styles.layoutContainer}>
        <header className={styles.header}>
          <Image
            className={styles.icon}
            src={SearchIcon}
            alt='searchIcon'
            width='20'
            height='20'
            onClick={handleSearchItemClick}
          />
          <Image className={styles.icon} src={AlarmIcon} alt='alarmIcon' width='20' height='20' />
          <Image className={styles.icon} src={BasketIcon} alt='basketIcon' width='20' height='20' />
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <GNB />
        </footer>
      </div>
    </div>
  )
}

export default Layout
