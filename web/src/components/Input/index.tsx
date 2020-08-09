import React, { InputHTMLAttributes } from 'react';

import './styles.css';

                            //Importando todos as propriedades do input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}
                                    //label, name e todas as outras propriedades
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;