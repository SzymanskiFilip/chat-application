import {useState} from "react";
import JoinWindow from "./Components/JoinWindow";

function App() {

  const [connected, setConnected] = useState(false);

  

  function joinChat(username){
    let webSocket = new WebSocket("ws://localhost:8080/chat");

    webSocket.onopen = (event) => {
      console.log("opened", event);
    };

    webSocket.onmessage = (event) => {
      console.log("message", event);
    };

    webSocket.onclose = (e) => {
      console.log("connection closed", e);
    };

    setConnected(true);
  }

  return (
    <div>
      {
        connected
        ?
        <h1>123</h1>
        :
        <JoinWindow handler={joinChat}/>
      }
      
    </div>
  );
}

export default App;
