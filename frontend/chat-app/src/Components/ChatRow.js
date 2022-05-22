function ChatRow(props){

    let direction = props.direction;
    let bgOwn = "white";

    if(direction === "justify-end"){
        bgOwn = "bg-white";
    } else {
        bgOwn = "bg-green-400";
    }

    return(
        <div className={"px-2 py-2 flex flex-row border-b-2 border-black" + " " + direction + " " + bgOwn}>
            <h1>{props.message.username}: {props.message.message}</h1>
        </div>
    )
}

export default ChatRow;