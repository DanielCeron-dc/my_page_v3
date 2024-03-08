import React, { useEffect, useState } from 'react';
import { useAppStore } from 'store/App.store';
import classes from './Card.module.css';
import useWindow from 'hooks/useWindowDimensions';

type CardProps = {
    img: string;
    title: string;
    description: string;
    labels: string[];
    link?: string;
    onClick?: () => void;
    position: number;

};

const Card: React.FC<CardProps> = (props) => {
    const [cardSelected, setCardSelected] = useState(false);
    const { selectedProject } = useAppStore();
    const { position } = props;

    const { isDesktop } = useWindow()
    console.log(isDesktop)

    useEffect(() => {
        if (selectedProject === position) {
            setCardSelected(true);
        } else {
            setCardSelected(false);
        }
    }, [selectedProject, position])

    return <button onClick={() => {
        if (props.onClick) {
            props.onClick();
        }
        if (props.link) {
            window.open(props.link, '_blank');
        }
    }}
        style={{
            zIndex: isDesktop ? 1000000 : 0,
        }}
        className={`${classes.Card}  ${cardSelected ? classes.selected : ''}`}>

        <img src={props.img} alt="" className={classes.CardImg} />
        <div className={classes.CardContent}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className={classes.CardLabels}>
                {props.labels.map((label, index) => <span key={index}>{label}</span>)}
            </div>
        </div>
    </button>
}
export default Card;