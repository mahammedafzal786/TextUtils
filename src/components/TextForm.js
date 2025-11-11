import React, { useState } from "react";

export default function TextForm(props) {
  const hendleUpClick = () => {
    // console.log('Uppercase was clicked'+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  };
  const hendleLoClick = () => {
    // console.log('Uppercase was clicked'+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  };

  const hendleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","success");
  };

  const hendleCopy= ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard","success");
    document.getSelection().removeAllRanges();
  }

  const hendleExtraSpaces= ()=>{
    let newText = text.split(/\s+/); 
    setText(newText.join(" ").trim()); 
    props.showAlert("Extra spaces removed","success");
  }

  const hendleOnChange = (event) => {
    // console.log('On Change.');
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" data-bs-theme={`${props.mode}`} style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            aria-label="With textarea"
            id="myBox"
            rows="8"
            value={text}
            onChange={hendleOnChange}
            style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={hendleUpClick} disabled={text.length===0}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={hendleLoClick} disabled={text.length===0}>
          Convert to Lowercase
        </button>
          <button className="btn btn-primary mx-1 my-1" onClick={hendleClearClick} disabled={text.length===0}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={hendleCopy} disabled={text.length===0}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={hendleExtraSpaces} disabled={text.length===0}>
          Remove Extra Spaces
        </button>
        
      </div>
      <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  );
}
