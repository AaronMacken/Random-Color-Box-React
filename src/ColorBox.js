import React from 'react';
import './ColorBox.css';

const ColorBox = props => {
    const colorProps = props.colorProps;
    const boxElements = colorProps.map((color, index) => {
        return (
            <div key={index}
                style={
                    {
                        backgroundColor: color, 
                        height: '100px',
                        width: '100px',
                        float: 'left'
                    }
                }>
            </div>
        )
    })
    return (
        <div>
            {boxElements}
        </div>
    )
}

export default ColorBox;