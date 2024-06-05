import { useState} from 'react'
import "./App.css";

function App() {
const [greeting,getGreeting] = useState("")
const [greetingtext,getGreetingbutton] = useState("Greeting Message")

  return (
    <div className="App">
      <div className="greeting-container">{greetingtext}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input onChange={(e)=>{
          getGreeting(e.target.value)
        }} id="greeting-message" type="text" />
      </div>

      <div className="buttons">
        <button onClick={()=>{
          getGreetingbutton(greeting)
        }}>Update text</button>
      </div>
    </div>
  );
}

export default App;
