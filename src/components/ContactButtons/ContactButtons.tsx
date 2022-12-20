import React from 'react';

import classes from './ContactButtons.module.css';

import { ReactComponent as GithubSvg } from 'assets/svg/github.svg';
import { ReactComponent as CvSvg } from 'assets/svg/cv.svg';
import { ReactComponent as LinkedinSvg } from 'assets/svg/linkedin.svg';
import Cv from 'assets/pdf/cv.pdf';


const ContactButtons: React.FC = () => {

    return <div className={classes.base}>
        <a href="https://github.com/DanielCeron-dc" style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white' }}>
            Github{"  "}<GithubSvg style={{ width: 40, height: 40, fill: 'white', margin: '0 10px' }} />
        </a>
        <a href={Cv} download style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white' }}>
            CV{' '}<CvSvg style={{ width: 40, height: 40, fill: 'white', margin: '0 10px' }} />
        </a>
        <a href="https://www.linkedin.com/in/daniel-ceron-b10612200/" download style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white' }}>
            LinkedIn{' '}<LinkedinSvg style={{ width: 40, height: 40, fill: 'white', margin: '0 10px' }} />
        </a>
    </div>
}
export default ContactButtons;