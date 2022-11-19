import React from 'react'
import './css/Template_1.css'


export default function Template_1(props) {
    const handleClick = () => {
        window.open(props.myObj.linkTo);
    };
    return (
        <div className={`grid bg-${props.myObj.theme}`}>
            <div className='grid-item'>
                <h1 className={`text-${props.myObj.theme === 'light' ? 'dark' : 'light'}`}>{props.myObj.h1} <span> {props.myObj.span} </span></h1>
                <p className={`text-xtra-${props.myObj.theme === 'light' ? 'light' : 'dark'}`}>{props.myObj.description}
                </p>
                <div className="social-links">
                    <a className={`text-${props.myObj.theme === 'light' ? 'dark' : 'light'}`} href="/"><ion-icon name="logo-whatsapp"></ion-icon></a>
                    <a className={`text-${props.myObj.theme === 'light' ? 'dark' : 'light'}`} href="/"><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a className={`text-${props.myObj.theme === 'light' ? 'dark' : 'light'}`} href="/"><ion-icon name="logo-github"></ion-icon></a>
                    <a className={`text-${props.myObj.theme === 'light' ? 'dark' : 'light'}`} href="/"><ion-icon name="logo-google"></ion-icon></a>
                </div>
                <button onClick={handleClick}>{props.myObj.btnText} <ion-icon name={props.myObj.btnIcon}></ion-icon></button>
            </div>
            <div className='grid-item'>
                <img src={props.myObj.imgSrc} alt="" />
            </div>
        </div>
    )
}
