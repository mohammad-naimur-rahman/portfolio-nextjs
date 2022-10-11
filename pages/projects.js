import { motion } from 'framer-motion'
import React from 'react'
import Layout from '../components/shared/Layout'
import { projects } from '../components/Pages/Homepage/MyWorks'
import Project from '../components/Pages/Homepage/Project'

const Projects = () => {
  return (
    <Layout title='My Works | Naimur Rahman'>
      <motion.section
        className='p-2 p-md-5 project-page'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <h2 className='heading'>My works</h2>
        <div className='py-4'>
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </motion.section>
    </Layout>
  )
}

export default Projects
