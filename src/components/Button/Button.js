import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <div>
            <button {...props} type="button" className="btn btn-primary"/>
        </div>
    );
};

export default Button;
