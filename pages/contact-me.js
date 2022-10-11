import { faEnvelope, faLocationArrow, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { footerLinks } from '../components/Pages/Homepage/Footer'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import Layout from '../components/shared/Layout'

const ContactMe = () => {
  const sendEmail = e => {
    e.preventDefault()
    toast.info('Sending Feedback...')

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      )
      .then(
        result => {
          toast.success('Thanks for your feedback!')
        },
        error => {
          console.log(error.message)
        }
      )
    e.target.reset()
  }

  return (
    <Layout title='Contact Me | Naimur Rahman'>
      <motion.section
        style={{ minHeight: '100vh' }}
        className='contact-page'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <div className='mx-auto text-center pt-3'>
          {footerLinks.map(link => (
            <>
              <a
                href={link.link}
                className='footer-link'
                target='_blank'
                rel='noreferrer'
                style={{
                  color: 'var(--color-primary)',
                  fontSize: '24px',
                  display: 'inline-block',
                  padding: '10px 10px 20px 10px',
                }}>
                <FontAwesomeIcon icon={link.icon} />
              </a>
            </>
          ))}
        </div>
        <div className='row d-flex d-md-flex flex-column flex-md-row'>
          <div className='col-md-6 d-flex justify-content-center align-items-center order-1 order-md-0'>
            <div>
              <div className='px-2 py-3'>
                <FontAwesomeIcon className='contact-icon' icon={faUser} />
                <h5 className='primary-color-text pt-3'>Naimur Rahman</h5>
              </div>
              <div className='px-2 py-3'>
                <FontAwesomeIcon className='contact-icon' icon={faEnvelope} />
                <h5 className='primary-color-text pt-3'>naeemhasn28@gmail.com</h5>
              </div>
              <div className='px-2 py-3'>
                <FontAwesomeIcon className='contact-icon' icon={faLocationArrow} />
                <h5 className='primary-color-text pt-3'>Narayanganj, Bangladesh</h5>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-center flex-column  order-0 order-md-1'>
            <form onSubmit={sendEmail} className='contact-form p-4 p-md-5'>
              <h2 className='pb-2'>Send your feedback</h2>
              <input type='text' required placeholder='Your Full Name' name='name' className='contact-form__name' />
              <input type='eamil' required className='contact-form__email' name='email' placeholder='Your email' />
              <textarea
                className='contact-form__textarea'
                required
                name='message'
                placeholder='Your valuable feedback'></textarea>
              <button type='submit' className='primary-btn'>
                Send feedback
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </motion.section>
    </Layout>
  )
}

export default ContactMe
