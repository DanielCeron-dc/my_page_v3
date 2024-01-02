import React from 'react';
import { createPortal } from 'react-dom';
import classes from './ModalContainer.module.css';


const ModalContainer: React.FC<{
    onClose: () => void;
    show: boolean;
}> = (props) => {

    return createPortal(
        <div className={`${classes.backdrop} ${props.show ? classes.open : classes.closed}`} onClick={props.onClose} >
            <div className={classes.modal} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>,
        document.getElementById('modal')!
    )

}

export default ModalContainer;