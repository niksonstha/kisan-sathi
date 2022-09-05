
import React, { useState } from 'react'

import "../styles/formInput.css"


const FormInput = (props) => {
  
    const {label,onChange,id,errorMessage, ...inputProps}=props;
   
   const [focused, setFocused]=useState(false);

   const handleBlur=()=>{
         setFocused(true);
   }
  return (
    <div className='forminput'>
       <label >{label}</label>
       <input className='input-style'  {...inputProps} onChange={onChange} onBlur={handleBlur} focused={focused.toString()}/>
       <span >{errorMessage}</span>
    </div>
  );
};

export default FormInput