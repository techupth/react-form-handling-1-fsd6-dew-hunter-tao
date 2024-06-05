import "./App.css";
import { useState } from "react";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [displayMsg, setDisplayMsg] = useState("Greeting Message");
  console.log(greetMsg);
  return (
    <div className="App">
      <div className="greeting-container">{displayMsg}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={greetMsg}
          onChange={function (event) {
            return setGreetMsg(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button onClick={() => setDisplayMsg(greetMsg)}>Update text</button>
      </div>
    </div>
  );
}

export default App;
