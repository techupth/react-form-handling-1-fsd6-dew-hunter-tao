import "./App.css";
import { useState } from "react";

function App() {
  const [greetingInputText, setGreetingInputText] = useState("");
  const [greetingDisplay, setGreetingDisplay] = useState("Greeting Message");
  const handleClick = () => {
    setGreetingDisplay(greetingInputText);
  };
  return (
    <div className="App">
      <div className="greeting-container">{greetingDisplay}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setGreetingInputText(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button onClick={handleClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
