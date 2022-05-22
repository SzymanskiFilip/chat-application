import {useState} from "react";
import ChatWindow from "./Components/ChatWindow";
import JoinWindow from "./Components/JoinWindow";

function App() {

  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState("");

  let socket = new WebSocket("ws://localhost:8080/chat");

  function joinChat(username){
    setUsername(username);
    setConnected(true);
  }

  return (
    <div>
      {
        connected
        ?
        <ChatWindow username={username} socket={socket}/>
        :
        <JoinWindow handler={joinChat}/>
      }
      
    </div>
  );
}

export default App;
