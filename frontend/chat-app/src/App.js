import {useState} from "react";
import ChatWindow from "./Components/ChatWindow";
import JoinWindow from "./Components/JoinWindow";

function App() {

  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState("");

  function joinChat(username){
    setUsername(username);
    setConnected(true);
  }

  return (
    <div>
      {
        connected
        ?
        <ChatWindow username={username} />
        :
        <JoinWindow handler={joinChat}/>
      }
      
    </div>
  );
}

export default App;
