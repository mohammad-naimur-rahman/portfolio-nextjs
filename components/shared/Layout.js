import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import HomeLayout from './HomeLayout'
import PermanentNav from './PermanentNav'

const Layout = ({ children, title, head }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {head}
      </Head>
      <main>
        <PermanentNav />
        <AnimatePresence>
          <HomeLayout>{children}</HomeLayout>
        </AnimatePresence>
      </main>
    </>
  )
}

export default Layout
