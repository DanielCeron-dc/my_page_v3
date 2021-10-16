import React from 'react';
import classes from './Email.module.css';
import { ReactComponent as EmailSvg } from 'assets/svg/email.svg'

const Email:React.FC = () => {
    
    return <div className={classes.base}>
        <div style={{ position: 'relative' }}>
            <button className={classes.email}>
                <EmailSvg style={{ fill: 'var(--color2)', width: '2rem', height: '2rem' }} />
            </button>
            <div className={classes.tooltip}>
                damusan21@gmail.com
            </div>
            
        </div>
    </div>
}
export default Email;