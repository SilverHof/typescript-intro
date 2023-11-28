import React, { HTMLAttributes, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   value: string;
   onChange: (event: React.ChangeEvent<HTMLInputElement>) =>void
}

export const Input: React.FC<InputProps> = ({ ...props }) => {
   return (
      <input
         className="input"
         type={props.type}
         placeholder={props.placeholder}
         value={props.value}
         onChange={props.onChange}
      />
   );
};
