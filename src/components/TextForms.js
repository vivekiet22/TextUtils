import React, { useState } from "react";

export default function TextForms(props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    console.log("UpperCase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!", "success");
  };
  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
    // props.showAlert("");
  };
  const handleClear = () => {
    console.log("OnChange");
    setText("");
    props.showAlert("Text cleared!", "success");
  };
  const speak = () => {
    var voices = window.speechSynthesis.getVoices();

    // voices = this.getVoices();
    let msg = new SpeechSynthesisUtterance();
    // msg
    console.log(voices);
    msg.text = text;
    msg.voice = voices[2];
    window.speechSynthesis.speak(msg);
  };
  const wordCount = (value) => {
    return value.split(/\s+/).filter((value) => {
      return value !== "";
    }).length;
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
          // backgroundColor: props.mode === "dark" ? "white" : "black",
        }}
      >
        <form>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#13466e",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-2 my-1"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-2 my-1"
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-2 my-1"
            onClick={handleClear}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-warning mx-2 my-1"
            onClick={speak}
          >
            Speak
          </button>
        </form>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          <b>
            {wordCount(text)} words and {text.length} characters.
          </b>
        </p>
        <p>
          <b>
            {" "}
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length != 0;
              }).length}{" "}
            Minutes read
          </b>
        </p>
        <h2>Preview</h2>
        {/* <p>{text}</p> */}
        <p>{text.length > 0 ? text : "Enter Something to Preview it here"}</p>
      </div>
    </>
  );
}
