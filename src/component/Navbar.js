import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import { motion } from 'framer-motion';
import "./Navbar.css"
const Navbar = () => {

    const [navX, setnavX] = useState(false);
    const [lined, setlined] = useState(false);
    const [load, setload] = useState(false);

    useEffect(() => {
       setload(true)
    }, [])
    const linehandle = () => {
        setlined(!lined);
    }
    const clicked = () => (
        setnavX(!navX)
    ); 
    const clickfalse = () => {
        setnavX(!navX);
        setlined(!lined);
    }

    return (
        <Router>
            
        <nav 
        //  initial={{y:'-5vh', opacity:0}}
        //  animate={load ? {y: 0, opacity:1} : ''}
        //  transition={{delay: 0.3, type:'tween'}}
        >
        <div onClick={() => {clicked(); linehandle()}} className="hamburger">
               <div className={lined ? 'line1 line' : 'line'}></div>
               <div className={lined ? 'line2 line' : 'line'}></div>
               <div className={lined ? 'line3 line' : 'line'}></div>
        </div>
        <li id="logo"><HashLink className="link" to="#">Logo</HashLink></li>
        <ul className={ navX ? 'open nav-links' : 'nav-links'}>
            <li onClick={clickfalse} style={{paddingBottom: '3px'}} ><HashLink className="link" to="#">الصفحة الرئيسية</HashLink></li>
            <li onClick={clickfalse}><HashLink smooth className="link" to="#about">حول</HashLink></li> 
            <li onClick={clickfalse}><HashLink smooth className="link" to="#blog">المختبرات</HashLink></li>
            <li onClick={clickfalse}><HashLink smooth className="link" to="#contact">تواصل معنا</HashLink></li>
        </ul>
    </nav>
    
    </Router>
    )
}

export default Navbar