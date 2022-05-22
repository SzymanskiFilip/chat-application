import { useState } from "react";

function ChatWindow({username}){

    const [messages, setMessages] = useState([]);

    let socket = new WebSocket("ws://localhost:8080/chat");

    socket.onopen = function(e){
        console.log("Connected");
    }

    socket.onmessage = function(e){
        console.log(JSON.parse(e.data))
        setMessages([...messages, JSON.parse(e.data)]);
    }

    socket.onclose = function(e){
        alert("Connection closed");
    }

    function sendMsg(){
        socket.send(JSON.stringify({username: username, message: "test", key: Math.random() * 1000}));
    }

    return(
        <div>
            <div className="bg-white w-window h-window absolute top-1/2 left-1/2 transform
            -translate-x-1/2 -translate-y-1/2 rounded">
            {
                messages.map((m) => {
                    return(
                        <h1 key={m.key}>{m.username}:{m.message}</h1>
                    )
                })
            }
            </div>
        <button className="bg-white" onClick={sendMsg}>Send</button>
        </div> 
    )
}

export default ChatWindow;