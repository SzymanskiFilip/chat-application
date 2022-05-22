import { useEffect, useRef, useState } from "react";
import ChatRow from "./ChatRow";

function ChatWindow({username, socket}){

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    socket.onopen = function(e){
        console.log("Connected");
    }

    socket.onmessage = function(e){
        console.log(JSON.parse(e.data))
        setMessages([...messages, JSON.parse(e.data)]);
        console.log(messages.length)
    }

    socket.onclose = function(e){
     alert("Connection closed");
    }

    function sendMsg(){
         socket.send(JSON.stringify({username: username, message: input, key: Math.random() * 1000}));
    }

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView();
    }, [messages]);

    return(
        <div className="flex flex-col items-center justify-center h-screen w-screen">
            <div className="bg-white rounded w-window h-window overflow-y-scroll">
            {
                messages.map((m) => {
                    return(
                        <ChatRow key={m.key} message={m.message} username={m.username} currentUser={username}/>
                    )
                })
            }
            <div ref={messagesEndRef}></div>
            </div>
            
            <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Message"
                className="my-2 px-2 py-2 outline-none focus:bg-green-200 rounded"
            />
            <button className="bg-white rounded px-2 py-2 hover:bg-green-200" 
            onClick={sendMsg}>Send</button>
        </div> 
    )
}

export default ChatWindow;