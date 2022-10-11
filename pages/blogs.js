import { motion } from 'framer-motion'
import React from 'react'
import BlogPost from '../components/Pages/Homepage/BlogPost'
import { useQuery } from 'react-query'
import BlogSkeleton from '../components/Pages/Homepage/BlogSkeleton'
import Layout from '../components/shared/Layout'
import { API_URL } from '../configs'

const Blogs = () => {
  const { isLoading, data } = useQuery('blogs', () => fetch(`${API_URL}/blogs?populate=*`).then(res => res.json()))

  return (
    <Layout title='Blogs | Naimur Rahman'>
      <motion.section
        className='p-2 p-md-5 blogs-page'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <h2 className='heading'>All of my blog posts</h2>
        {isLoading ? (
          <div className='row py-4'>
            {[0, 1, 2, 3].map(el => (
              <BlogSkeleton key={el} />
            ))}
          </div>
        ) : null}
        <div className='row py-4'>
          {data?.data.map(blog => (
            <BlogPost key={blog.id} blog={blog} />
          ))}
        </div>
      </motion.section>
    </Layout>
  )
}

export default Blogs
