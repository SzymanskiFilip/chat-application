function ChatRow(props){

    let direction = props.direction;

    return(
        <div className={"px-2 py-2 flex flex-row " + direction}>
            <h1>{props.message.username}</h1>
        </div>
    )
}

export default ChatRow;