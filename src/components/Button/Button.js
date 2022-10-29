import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <div>
            <button {...props} type="button" className="btn btn-secondary"/>
        </div>
    );
};

export default Button;
