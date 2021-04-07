import React from 'react';
import className from 'classnames';

import './Button.scss';

function Button({children, size, color, outline, fullwidth,...rest}){
    console.log(rest);
    return (
    <button className ={className("Button",size,color,{
    outline,
    fullwidth})} 
    {...rest}
   >{children}</button>
    );
}

Button.defaultProps ={
    size:'medium',
    color:'blue'
};
export default Button;
