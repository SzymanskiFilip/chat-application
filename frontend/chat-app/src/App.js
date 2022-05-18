import {useState} from "react";
import JoinWindow from "./Components/JoinWindow";

function App() {

  const [connected, setConnected] = useState(false);

  function joinChat(username){
    console.log("hello" + username)
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
