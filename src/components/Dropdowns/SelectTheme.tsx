import React from 'react';
import classes from './SelectTheme.module.css';
import { useAppStore } from 'store/App.store';
import colors from 'tools/colors';



const SelectTheme: React.FC = () => {

    const [isOpened, setIsOpened] = React.useState(false);

    const { changeTheme } = useAppStore();

    return <div className={classes.SelectTheme} onClick={() => setIsOpened(!isOpened)}>
        <div className={classes.button}>
            <p style={{ fontSize: '1rem' }}>Theme</p>
            <div className={classes.arrow}>
                <div className={isOpened ? classes.arrowUp : classes.arrowDown}></div>
            </div>
        </div>
        {isOpened && <div className={classes.options}>
            {Object.keys(colors).map((key, index) => {
                return <div
                    key={index}
                    className={classes.option}
                    onClick={() => {
                        changeTheme(key as keyof typeof colors);
                        setIsOpened(false);
                    }}
                >
                    {key}
                </div>
            })}
        </div>}
    </div>
}


export default SelectTheme;

