import ChatRow from "./ChatRow";
import MessageDTO from "../DTO/MessageDTO";

function ChatWindow(props){

    let currentUser = props.username;

    let messages = [];
    messages.push(new MessageDTO("filip", "msg"));
    messages.push(new MessageDTO("Dave", "msg123"));
    messages.push(new MessageDTO("Cobra", "msg333"));

    function getDirection(username){
        if(username === currentUser){
            return "justify-end";
        } else {
            return "justify-start";
        }
    }

    return(
        <div className="bg-white w-window h-window absolute top-1/2 left-1/2 transform
        -translate-x-1/2 -translate-y-1/2 rounded ">
            {
                messages.map((m) => {
                    return(
                        <ChatRow direction={getDirection(m.username)} key={m.key} message={m}/>
                    )
                })
            }
        </div>
    )
}

export default ChatWindow;