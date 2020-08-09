import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

                            //Importando todos as propriedades do Textarea
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}
                                    //label, name e todas as outras propriedades
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return(
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default Textarea;