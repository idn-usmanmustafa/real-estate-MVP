import { useState } from "react";
import gate1 from "./images/gate1.jpeg";
import gate2 from "./images/gate2.jpeg";
import gate3 from "./images/gate3.jpeg";
import gate4 from "./images/gate4.jpeg";
import "./App.css";

function App() {
  // initalizing states
  const [state, setState] = useState(gate3);

  return (
    <>
      <div className="container">
        <div className="bg-container">
          <div className="selected-door-container">
            <img src={state} alt="gate1" className="selected-door" />
          </div>
          <div className="bg-image"></div>
        </div>
        <div className="all-doors-container">
          <div className="all_doors">
            <img
              src={gate1}
              alt="gate1"
              className="door"
              onClick={() => setState(gate1)}
            />
            <img
              src={gate2}
              alt="gate2"
              className="door"
              onClick={() => setState(gate2)}
            />
            <img
              src={gate3}
              alt="gate3"
              className="door"
              onClick={() => setState(gate3)}
            />
            <img
              src={gate4}
              alt="gate4"
              className="door"
              onClick={() => setState(gate4)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
