import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import {Link} from 'react-router-dom'
const Lib = ({ title, body }) => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <div data-aos="fade-up" style={{ marginTop: "30px" }} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
      <div className="card">
        <div className="img-card" style={{
        }}></div>
        <div className="caption-card">
          <div className="title-card">{title}</div>
          <div className="body-card">{body}</div>
          <Link to="/login">
            <button>التفاصيل</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Lib
