import React,{useEffect} from 'react'
import './About.css';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { makeStyles } from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import Aos from 'aos';
import "aos/dist/aos.css";

const useStyle = makeStyles({
    icons: {
        color: '#222222',
        padding: "20px",
        // transition: 1s ease-in-out;
        transition: '0.6s ease',
        "&:hover": {
            color: 'rgb(7, 177, 77, 0.42)',
            fontSize: "large"
        }
    },
})
const About = () => {
    const classes = useStyle();

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div id="about">
            <div className="title">حول التطبيق</div>
            <div className="caption">
                <div data-aos="fade-right" className={`about-card`}>
                    <div className={`iconsCard`, classes.icons}><LocalHospitalIcon /></div>
                    <div>
                        <div className="concept">خدمات الطوارئ</div>
                        <hr style={{ width: "100px", marginTop: "5px", marginBottom: '5px', opacity: '0.5' }} />
                        <div className="concept-2">تطبيقنا راح يوفرلك الوقت ويحيبلك الفحص لي يمك</div>
                    </div>
                </div>
                <div data-aos="fade-up" className="about-card">
                    <div className={`iconsCard`, classes.icons}><EventAvailableIcon /></div>
                    <div>
                        <div className="concept">فحوصات عبر الانترنت</div>
                        <hr style={{ width: "100px", marginTop: "5px", marginBottom: '5px', opacity: '0.5' }} />
                        <div className="concept-2"> التطبيق راح يوفرلك الوقت ويحيبلك الفحص لي يمك باسهل الطرق</div>
                    </div>
                </div>
                <div  data-aos="fade-left" className="about-card">
                    <div className={`iconsCard`, classes.icons}><LocalPharmacyIcon /></div>
                    <div>
                        <div className="concept">أطباء مؤهلين</div>
                        <hr style={{ width: "100px", marginTop: "5px", marginBottom: '5px', opacity: '0.5' }} />
                        <div className="concept-2"> التطبيق راح يوفرلك الوقت ويحيبلك الفحص لي يمك باسهل الطرق</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
