export default class MessageDTO{
    username;
    message;
    key;

    constructor(username, message){
        this.username = username;
        this.message = message;
        this.key = Math.random() * 10000; 
    }
}