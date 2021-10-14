import React, { useEffect, useState } from 'react';
import { useAppStore } from 'store/App.store';
import classes from './Card.module.css';


type CardProps = {
    img: string;
    title: string;
    description: string;
    labels: string[];
    link: string;
    position: number; 
};

const Card: React.FC<CardProps> = (props) => {
    const [cardSelected, setCardSelected] = useState(false);
    const { selectedProject } = useAppStore();


    useEffect(() => {
        if (selectedProject === props.position) {
            setCardSelected(true);
        } else {
            setCardSelected(false);
        }
    }, [selectedProject])


    
    return <a href ={props.link}>
        <div className={`${classes.Card}  ${cardSelected ? classes.selected : ''}`}>
            <img src={props.img} alt="" className={classes.CardImg} />
            <div className={classes.CardContent}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className={classes.CardLabels}>
                    {props.labels.map((label, index) => <span key={index}>{label}</span>)}
                </div>
            </div>
        </div>
    </a>
}
export default Card;