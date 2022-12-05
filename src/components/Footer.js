import React from 'react'
import './css/Footer.css'
import { Link } from "react-router-dom"


export default function Footer(props) {
  return (
    <footer className={`bg-${props.theme}`}>
      <ul>
        <label htmlFor="footer-title">Quick Links</label>
        <li><Link className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/portfolio-react.js">Home <ion-icon name="home"></ion-icon></Link></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="https://www.upwork.com/workwith/jatindahiya">Hire Me <ion-icon name="ribbon"></ion-icon></a></li>
        <li><Link className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/work">Work <ion-icon name="logo-react"></ion-icon></Link></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="mailto:dahiya2704@gmail.com">Chat <ion-icon name="logo-google"></ion-icon></a></li>
      </ul>

      <ul>
        <label htmlFor="footer-title">Services</label>
        <li><Link className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/portfolio-react.js">UI Mockups<ion-icon name="planet"></ion-icon></Link></li>
        <li><Link className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/portfolio-react.js">Web Design & Development <ion-icon name="code-slash"></ion-icon></Link></li>
        <li><Link className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/portfolio-react.js">Web Hosting <ion-icon name="cloud-done"></ion-icon></Link></li>
        <li><Link className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/portfolio-react.js">Consultancy <ion-icon name="analytics"></ion-icon></Link></li>
      </ul>

      <ul>
        <label htmlFor="footer-title">Social Links</label>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="https://github.com/jatindahiya100?tab=repositories" rel="noreferrer">Github <ion-icon name="logo-github"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="https://www.linkedin.com/in/jatin-dahiya-325b93200/" rel="noreferrer">Linkedin <ion-icon name="logo-linkedin"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="https://www.upwork.com/freelancers/~012d6eb926a1f7a86a">Upwork<ion-icon name="logo-paypal"></ion-icon></a></li>

      </ul>
    </footer>
  )
}
