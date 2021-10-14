import React from 'react';
import classes from './TextArea.module.css';



const TextArea: React.FC<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> = (props) => {

    let propsToPass = {...props}

    delete propsToPass.className;
    return <textarea className={classes.textArea} placeholder = "message" {...propsToPass}>
        
    </textarea>
}
export default TextArea;