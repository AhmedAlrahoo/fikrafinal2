import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import "./Footer.css";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    colors:{
        color:'#aaa',
        fontSize:35,
        '&:hover':{
            color:"rgb(24, 105, 97)",
        }
    },
}));
const Footer = () => {
    const classes = useStyles();
    return (
        <div className="footer">
            <div>
            <FacebookIcon  className={classes.colors}/>
            <InstagramIcon  className={classes.colors}/>
            <TwitterIcon  className={classes.colors}/>
            <LinkedInIcon  className={classes.colors}/>
            </div>
            <div>Contact with us now on social media</div>
        </div>
    )
}

export default Footer
