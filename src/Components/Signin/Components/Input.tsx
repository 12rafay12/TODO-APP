import React from 'react'
import "./InputStyles.scss"
import { UseFormRegister } from "react-hook-form"
type InputType={
    type:string,
    placeholder:string,
    register: UseFormRegister<any>,
}

const Input:React.FC <InputType> = (props) => {
  
  return (
    <div>
        <input placeholder={props.placeholder}  type={props.type}  {...props.register(props.placeholder, {
          required: `Please enter ${props.placeholder}.`,
        })} required/>
        
    </div>
  )
}

export default Input
