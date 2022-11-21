import React from 'react'
import Template from './Template_1';
import './css/Work.css'
import Rainfire from './img/Rainfire.png'
import Backlinks from './img/Backlinks-Tracker.png'
import JPLewis from './img/JP-Lewis-Group.png'
import pizzaBook from './img/PizzaBook-Home.png'
import Appointmentwale from './img/Appointmentwale.png'

export default function Work(props) {

  // Object For Resume Template to be passed as props
  let rainfireObj = {
    theme: props.theme,
    h1: '1). Rainfire.in',
    span: 'Online Store',
    description: '',
    btnText: 'Visit Site',
    btnIcon: 'link',
    linkTo: 'http://rainfire.in/',
    imgSrc: Rainfire
  }
  let jpLewisGroupObj = {
    theme: props.theme,
    h1: '2). JP LEWIS GROUP, LLC',
    span: 'Landing Page',
    description: '',
    btnIcon: 'link',
    linkTo: 'https://jplewisgroup.com/',
    imgSrc: JPLewis
  }
  let backlinksObj = {
    theme: props.theme,
    h1: '3). Backlinks Tracker',
    span: 'Tool',
    description: '',
    btnIcon: 'link',
    linkTo: 'https://jatindahiya100.github.io/backlinks-tracker/',
    imgSrc: Backlinks
  }

  let pizzabookObj = {
    theme: props.theme,
    h1: '4). PizzaBook',
    span: '-A Food Order Web App',
    description: '',
    btnText: 'Source Code',
    btnIcon: 'logo-github',
    linkTo: 'https://github.com/jatindahiya100/pizzaBook',
    imgSrc: pizzaBook
  }
  let appointmentwaleObj = {
    theme: props.theme,
    h1: '5). AppointmentWale',
    span: 'Booking System',
    description: '',
    btnText: 'Source Code',
    btnIcon: 'logo-github',
    linkTo: 'https://github.com/jatindahiya100/appointment',
    imgSrc: Appointmentwale
  }
  
  


  return (
    <>
      <Template myObj={rainfireObj} />
      <Template myObj={jpLewisGroupObj} />
      <Template myObj={backlinksObj} />
      <Template myObj={pizzabookObj} />
      <Template myObj={appointmentwaleObj} />
    </>
  )
}
