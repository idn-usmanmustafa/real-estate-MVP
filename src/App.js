import starImage from "./images/star.png";
import greenCircle from "./images/green.png";
import redCircle from "./images/red.png";
import blueCircle from "./images/blue.png";
import yellowCircle from "./images/yellow.png";
import { useState } from "react";
import "./App.css";

function App() {
  // initalizing states
  const [state, setState] = useState(greenCircle);

  return (
    <>
      <div className="container">
        <img
          className="circle"
          src={greenCircle}
          alt="img"
          onClick={() => setState(greenCircle)}
        />
        <img
          className="circle"
          src={redCircle}
          alt="img"
          onClick={() => setState(redCircle)}
        />
        <img
          className="circle"
          src={blueCircle}
          alt="img"
          onClick={() => setState(blueCircle)}
        />
        <img
          className="circle"
          src={yellowCircle}
          alt="img"
          onClick={() => setState(yellowCircle)}
        />
        <img className="new-circle" src={state} alt="img" />

        <img className="star" src={starImage} alt="img" />
      </div>
    </>
  );
}

export default App;
