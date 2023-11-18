import Image from 'next/image'
import Banner from '@/components/Banner'
import CarPanel from '@/components/CarPanel'
import ProductCard from '@/components/ProductCard'
import styles from './page.module.css'
import TravelCard from '@/components/TravelCard'

export default function Home() {
  return (
    <main>
      <Banner />
      <TravelCard></TravelCard>
    </main>
  )
}
