import React from 'react'
import LibsList from './LibsList'
import About from "../component/About"
// import doctor from '../images/doctor-2.jpg'
// import doctor2 from '../images/doctor-3.jpg'
// import Login from './login/Login'
// import {Route } from 'react-router-dom'
import Contact from '../component/Contact'
import Footer from './Footer'
const Landing = ({ libs,setStateF }) => {

    return (
        <div>
            <section>
                <div className="landing">
                    <div className="layer-black">
                        {/* <div className="logo">LOGO</div> */}
                        <div className="textlanding">
                            مختبرنا
                        </div>
                    </div>
                </div>
                <About />
                <LibsList setStateF={setStateF} libs={libs} />
            </section>
            <Contact />
      <Footer />
        </div>
    )
}

export default Landing
