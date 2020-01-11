import React, { Component } from 'react';
const Forminput=({handleChange,label,...otherProps})=>(
    <div className="group">
<input className="form-input" onChange={handleChange} {...otherProps}/>
{
    label ?
    (<label className=`${otherprops.value.length ? 'shrink':'' } form-input-label` >{label}</label>
    </div>
)
export default Forminput;