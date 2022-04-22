import React from 'react'

// import {GrInstagram as Instagram, GrFacebook as Facebook, GrTwitter as Twitter} from 'react-icons/gr'
import {AiFillInstagram as Instagram, AiFillFacebook as Facebook, AiOutlineTwitter as Twitter} from 'react-icons/ai'
import {AiFillGithub as GitHub} from 'react-icons/ai'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id='contact'>
      <ul>
        <li><a href="#contact"><Facebook/></a></li>
        <li><a href="#contact"><Instagram/></a></li>
        <li><a href="#contact"><Twitter/></a></li>
        <li><a href="https://github.com/hirokirigaya" target='_blank'><GitHub/></a></li>
      </ul>
      <p>Maked by <a href="https://github.com/hirokirigaya" target='_blank'>Daniel</a> Challenge from <a href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6" target='_blank'>FrontEnd Mentor</a></p>
    </footer>
  )
}
