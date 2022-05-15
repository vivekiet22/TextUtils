// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alerts from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
// import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Darkmode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        <Alerts alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              {/* <About></About> */}
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <TextForms
                showAlert={showAlert}
                heading="Enter the text to analyze Below"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
