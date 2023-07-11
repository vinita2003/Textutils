import React, { useState } from 'react'

export default function TextForm(props) {
    const handleToClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","Success");
}
const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","Success");
}

const handleChange = (event)=>{
    setText(event.target.value);
    props.showAlert("Converted to !","Success");

}
const handleCopy = () => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy the text","Success");
}

const handleExtraSpaces = () => {
  let newText = text.split(/[  ]+/);
  setText(newText.join(" "));
  props.showAlert("Remove the extra space!","Success");
}
    const [text, setText] = useState('enter the text here'); 
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
<textarea className="form-control" value = {text}  onChange = {handleChange} style = {{backgroundColor:props.mode === 'dark'? 'grey':'white',color: props.mode === 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
  <button type="button" onClick = {handleToClick}className="btn btn-primary my-2 mx-2 ">ConvertTo UpperCase</button>
  <button type="button"   onClick = {handleLoClick}className="btn btn-primary my-2">ConvertTo LowerCase</button>
  <button type="button"   onClick = {handleCopy}className="btn btn-primary my-2">handleCopy</button>
  <button type="button"   onClick = {handleExtraSpaces}className="btn btn-primary my-2">Remove Extra Spaces</button>
</div>
</div>

<div className="container my-2" style={{color: props.mode === 'dark'? 'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words {text.length} character</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the box"}</p>
</div>
</>
  )
}
