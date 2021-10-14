import React from 'react';
import classes from './Email.module.css';
import { ReactComponent as EmailSvg } from 'assets/svg/email.svg'
import Input from 'components/forms/Input/Input';
import TextArea from 'components/forms/TextArea/TextArea';
import Button from 'components/forms/Button/Button';

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