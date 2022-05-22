function ChatRow(props){

    let backgroundAndDirection = "bg-white";

    if(props.currentUser === props.username){
        backgroundAndDirection = "bg-white justify-end";
    } else {
        backgroundAndDirection = "bg-green-500 justify-start";
    }

    return(
        <div className={"px-2 py-2 flex flex-row border-b-2 border-black" + " " + backgroundAndDirection}>
            <h1>{props.username}: {props.message}</h1>
        </div>
    )
}

export default ChatRow;