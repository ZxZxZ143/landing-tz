import {type FC, type PropsWithChildren} from 'react';
import type {ButtonProps} from "./type.ts";

const Button:FC<PropsWithChildren<ButtonProps>> = ({className, onClick, children}) => {
    return (
        <button onClick={onClick} className={`${className} btn`}>
            {children}
        </button>
    );
};

export default Button;
