import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
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
        <AnimatePresence>{children}</AnimatePresence>
      </main>
    </>
  )
}

export default Layout
