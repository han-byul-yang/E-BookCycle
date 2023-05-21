import type { NextPage } from 'next'
import Image from 'next/image'

import { BookListTypes } from 'types/bookListTypes'
import AdvertiseBanner from 'components/AdvertiseBanner'

import styles from './home.module.scss'

interface HomeProps {
  bookListData: BookListTypes[]
}

const Home: NextPage = ({ bookListData }: any) => {
  return (
    <>
      <AdvertiseBanner />
      <ul className={styles.bookListContainer}>
        {bookListData.map((bookData: BookListTypes) => {
          const { id, url, name, author, price } = bookData
          return (
            <li key={`${id}`} className={styles.bookListBox}>
              <Image className={styles.image} src={url[0]} alt={`${name}-img`} width='100' height='140' />
              <p className={styles.name}>{name}</p>
              <p className={styles.author}>{author}</p>
              <p className={styles.price}>{price}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
  const dataFetch = await fetch('http://localhost:4000/booksData', {
    headers: {
      Accept: 'application/json',
    },
  })
  const bookListData = await dataFetch.json()
  console.log(bookListData)

  return {
    props: {
      bookListData,
    },
  }
}
