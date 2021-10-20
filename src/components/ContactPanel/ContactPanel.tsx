import React from 'react';
import classes from './ContactPanel.module.css';

import Input from 'components/forms/Input/Input';
import TextArea from 'components/forms/TextArea/TextArea';

const ContactPanel:React.FC = () => {
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);
        console.log(formdata.get('name'));
    }

    return <form className = {classes.contactPanel} onSubmit ={handleSubmit}>
        <h1>Contact</h1>
        <Input name = "name" label ="name"/>
        <Input name = "email" label = "email"/>
        <TextArea name = "message"/>
        <button>Send</button>
    </form>
}
export default ContactPanel;