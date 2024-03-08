import React from 'react';
import { createPortal } from 'react-dom';
import classes from './ModalContainer.module.css';
import useWindow from 'hooks/useWindowDimensions';


const ModalContainer: React.FC<{
    onClose: () => void;
    show: boolean;
    style?: React.CSSProperties;
}> = (props) => {

    const { isDesktop, isTablet } = useWindow();

    const width = isDesktop ? '40vw' : isTablet ? '80vw' : '100vw';

    return createPortal(
        <div className={`${classes.backdrop} ${props.show ? classes.open : classes.closed}`} onClick={props.onClose} >
            <div className={classes.modal} onClick={e => e.stopPropagation()} style={{
                ...props.style,
                width,
            }}>
                <button onClick={props.onClose} className={classes.closeButton}>X</button>
                {props.children}
            </div>
        </div>,
        document.getElementById('modal')!
    )

}

export default ModalContainer;