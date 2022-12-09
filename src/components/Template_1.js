import React from 'react'
import './css/Template_1.css'
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function Template_1(props) {
    const handleClick = () => {
        window.open(props.myObj.linkTo);
    };
    return (
        <div className={`grid bg-${props.myObj.theme}`}>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='grid-item'>
                <h1 className={`text-${props.myObj.theme === 'light' ? 'dark' : 'light'}`}>{props.myObj.h1} <span> {props.myObj.span} </span></h1>
                <p className={`text-xtra-${props.myObj.theme === 'light' ? 'light' : 'dark'}`}>{props.myObj.description}
                </p>
                <div className="social-links">
                    {
                        props.myObj.skills.map((skills,i) => {
                            return <Link className={`text-${props.myObj.theme === 'light' ? 'dark' : 'light'}`} key={i}>{skills}</Link>
                        })
                    }

                </div>
                <button onClick={handleClick}>{props.myObj.btnText} <ion-icon name={props.myObj.btnIcon}></ion-icon></button>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='grid-item'>
                <img src={props.myObj.imgSrc} alt="" />
            </div>
        </div>
    )
}
