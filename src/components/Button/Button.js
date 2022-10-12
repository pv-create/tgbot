import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button {...props} className={'button'+props.classname}/>
        </div>
    );
};

export default Button;
