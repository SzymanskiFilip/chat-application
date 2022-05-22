export class WebSocketService{
    webSocket;
    chatMessages;

    constructor(){
        this.webSocket = new WebSocket("ws://localhost:8080/chat");
        this.chatMessages = [];
    }

    openWebSocket(){
        this.webSocket.onopen = (event) => {
        console.log("opened", event);
        };

        this.webSocket.onmessage = (event) => {
            console.log(event.data);
            this.chatMessages.push(event.data);
        };

        this.webSocket.onclose = (e) => {
         console.log("connection closed", e);
        };
    }

    sendMessage(message){
        this.webSocket.send(JSON.stringify(message));
    }
}