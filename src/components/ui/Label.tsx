import React from 'react';

const labelStyles: React.CSSProperties = {
    fontSize: '0.8rem',
    fontWeight: 500,
    margin: '0 0 0 0.5rem',
    padding: '5px 10px',
    color: 'white',
    backgroundColor: 'var(--theme)',
    borderRadius: '4px',
};

const Label: React.FC<{ text: string }> = (props) => {
    return <span style={labelStyles}>{props.text}</span>;
};

export default Label;