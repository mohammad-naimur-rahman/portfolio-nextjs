import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import navLinks from '../../data/sidenav.json'

const SideNav = () => {
  const { pathname } = useRouter()
  console.log(pathname)

  return (
    <div className='side-nav'>
      <div className='side-nav__profile p-2 p-md-5'>
        <img className='side-nav__profile--img' src='/images/profile.jpg' alt='profile' />
        <h3 className='side-nav__profile--heading secondary-color-text pt-2'>Naimur Rahman</h3>
        <p className='side-nav__profile--text secondary-color-text pt-1 pb-2'>Web Developer</p>
        <div className='side-nav__profile--social'>
          <a
            className='side-nav__profile--social__link'
            target='_blank'
            rel='noreferrer'
            href='https://www.twitter.com/your_naimur'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className='side-nav__profile--social__link'
            target='_blank'
            rel='noreferrer'
            href='https://www.facebook.com/yourNaimur'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className='side-nav__profile--social__link'
            target='_blank'
            rel='noreferrer'
            href='https://www.github.com/mohammad-naimur-rahman'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className='side-nav__nav'>
        <ul>
          {navLinks.map(({ id, href, name }) => (
            <li key={id}>
              <div className='d-flex align-items-center justify-content-end'>
                {pathname === href && <div className='location'></div>}
                <Link href={href}>{name}</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideNav
