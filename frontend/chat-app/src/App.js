import {useState} from "react";
import ChatWindow from "./Components/ChatWindow";
import JoinWindow from "./Components/JoinWindow";

function App() {

  const [connected, setConnected] = useState(false);

  

  function joinChat(username){
    let webSocket = new WebSocket("ws://localhost:8080/chat");

    webSocket.onopen = (event) => {
      setConnected(true);
      console.log("opened", event);
    };

    webSocket.onmessage = (event) => {
      console.log("message", event.data);
    };

    webSocket.onclose = (e) => {
      console.log("connection closed", e);
    };

    /*
    setInterval(() => {
      webSocket.send("Hello!");
    }, 2000);
    */
  }

  return (
    <div>
      {
        connected
        ?
        <ChatWindow />
        :
        <JoinWindow handler={joinChat}/>
      }
      
    </div>
  );
}

export default App;
