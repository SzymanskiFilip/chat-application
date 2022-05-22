function ChatRow(props){

    let direction = props.direction;

    return(
        <div className={"px-2 py-2 flex flex-row ".concat(direction)}>
            <h1>hello</h1>
        </div>
    )
}

export default ChatRow;