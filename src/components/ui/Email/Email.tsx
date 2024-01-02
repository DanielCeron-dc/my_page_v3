import React from 'react';
import classes from './Email.module.css';
import { ReactComponent as EmailSvg } from 'assets/svg/email.svg'

const Email: React.FC = () => {

    return <div style={{ position: 'relative' }}>
        <button className={classes.email}>
            <EmailSvg style={{ fill: 'var(--theme)', width: '2rem', height: '2rem' }} />
        </button>
        <div className={classes.tooltip}>
            damusan21@gmail.com
        </div>

    </div>
}
export default Email;