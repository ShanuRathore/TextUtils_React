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
            <h2>{props.heading}</h2>   
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Enter text area</label> */}
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} 
                    style={{backgroundColor:props.mode==='dark'?'grey':'light' , color:props.mode==='light'?'black':'white'}} rows="8"></textarea>
                {/* text is hook , handleOnChange will trigger the change*/}
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words , {text.length} characters</p>
            <p>Average time to read this in minutes {0.008*text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something on textbox above to preview here "}</p>
        </div>
        </>
    );
}
