import Layout from '../components/shared/Layout'
import { motion } from 'framer-motion'
import Header from '../components/Pages/Homepage/Header'
import Services from '../components/Pages/Homepage/Services'
import MyWorks from '../components/Pages/Homepage/MyWorks'
import Blog from '../components/Pages/Homepage/Blog'
import SayHello from '../components/Pages/Homepage/SayHello'
import Footer from '../components/Pages/Homepage/Footer'

export default function Home() {
  return (
    <Layout title='Naimur Rahman | MERN stack developer'>
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Header />
        <Services />
        <MyWorks />
        <Blog />
        <SayHello />
        <Footer />
      </motion.main>
    </Layout>
  )
}
