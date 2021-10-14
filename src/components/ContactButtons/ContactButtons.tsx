import React from 'react';

import classes from './ContactButtons.module.css';

import { ReactComponent as GithubSvg } from 'assets/svg/github.svg';
import { ReactComponent as CvSvg } from 'assets/svg/cv.svg';
import Cv from 'assets/pdf/cv.pdf';


const ContactButtons:React.FC = () => {
    
    return <div className ={classes.base}>
        <button>
            <a href="https://github.com/DanielCeron-dc" style={{ display: 'flex', height: '100%', alignItems: 'center',  justifyContent: 'center', textDecoration: 'none', color: 'white'}}>
                Github{"  "}<GithubSvg style={{ width: 50, height: 50, fill: 'white', margin: '0 10px'}} />
            </a>
        </button>
        <button>
            <a href={Cv} download style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white' }}>
                CV{' '}<CvSvg style={{ width: 50, height: 50, fill: 'white', margin: '0 10px' }} />
            </a>
        </button>
    </div>
}
export default ContactButtons;