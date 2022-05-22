import ChatRow from "./ChatRow";

function ChatWindow(props){

    let messages = ["Will: hello!", "Dave: HI!"];

    return(
        <div className="bg-white w-window h-window absolute top-1/2 left-1/2 transform
        -translate-x-1/2 -translate-y-1/2 rounded ">
            {
                messages.map((m) => {
                    return(
                        <ChatRow direction={"justify-end"}/>
                    )
                })
            }
        </div>
    )
}

export default ChatWindow;