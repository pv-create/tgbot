import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <div>
            <button {...props} />
        </div>
    );
};

export default Button;
