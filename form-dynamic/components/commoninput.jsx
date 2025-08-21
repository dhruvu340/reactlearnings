import React from "react";

const Commoninput = ({ label,name,id,placeholder,value,onChange,type }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input 
      name={name}
      placeholder={placeholder}
      id={id}
      value={value} 
      type={type||'text'}
      onChange={onChange}

      />
    </div>
  );
};

export default Commoninput;
