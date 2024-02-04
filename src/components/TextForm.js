import React ,{useState} from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {

    const [text, setText] = useState('');
    //text is a state variable whose default value is "Enter text here"
    //setText is use to make changes in text which get value from useState
    //setText is an uodation function
    //text="newtext";   //wrong way to change the state
    //setText="newtext";   //Correct way to change the state

    const handleUpClick=()=>{
        // console.log("Upper case was clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case" ,"Success");
    }

    const handleLowClick=()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case" ,"Success");
    }
    
    const handleClearClick=()=>{
        let newText= '';
        setText(newText);
        props.showAlert("All text is cleared" ,"Success");
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Coppied" ,"Success");
        document.getSelection().removeAllRanges();
    }
    
    //onChange automatically pass event in it
    const handleOnChange=(event)=>{
        setText(event.target.value);    
        // event.target refers to the HTML element that triggered the event.
        // .value gets the current value of the input field.
        // So, when the user interacts with an input field (e.g.,text area), the handleOnChange function will be called.
        // It takes the event as a parameter, extracts the value from the input field, and then uses the setText function
        // to update some state or variable with that value.
    }

    return (
        <>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
            <h2 className='mb-2'>{props.heading}</h2>   
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Enter text area</label> */}
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} 
                    style={{backgroundColor:props.mode==='dark'?'#A7A88A':'#EBEBE8' , color:props.mode==='light'?'black':'white'}} rows="8"></textarea>
                {/* text is hook , handleOnChange will trigger the change*/}
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
            <p>Average time to read this in minutes {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview "}</p>
        </div>
        </>
    );
}
