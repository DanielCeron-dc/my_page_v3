import React from 'react';
import classes from './ContactPanel.module.css';

import Input from 'components/forms/Input/Input';
import TextArea from 'components/forms/TextArea/TextArea';
import ContactButtons from 'components/ContactButtons/ContactButtons';

const ContactPanel:React.FC = () => {
    
    const handleCopy = (e:any) => {
        e.preventDefault();
        const text = 'damusan21@gmail.com'; 
        navigator.clipboard.writeText(text);
        alert('email copied to clipboard');
    }

    return <form className = {classes.contactPanel}>
        <h1>Contact</h1>
        <Input name="email" label="email" value='damusan21@gmail.com' />
        <button onClick={handleCopy}> copy </button>
        <ContactButtons />
    </form>
}
export default ContactPanel;