import {useState} from "react";

function JoinWindow(props){

    const [username, setUsername] = useState("");

    function handleClick(){
        props.handler(username);
    }

    return(
        <div className="absolute top-1/2 left-1/2 transform
        -translate-x-1/2 -translate-y-1/2
        bg-stone-100 h-56 w-700
        rounded
        flex flex-row
        ">
            <div className="bg-stone-100 w-2/3 flex flex-row justify-center items-center">
                <input type="text" className="w-96 h-1/6 outline-none drop-shadow-md focus:drop-shadow-xl transition duration-150 rounded px-2" placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="bg-green-500 w-1/3 flex flrx-row justify-center items-center">
                <h1 className="text-white select-none text-2xl hover:cursor-pointer font-light transition-all duration-300 hover:font-medium"
                onClick={handleClick}
                >Join chat!</h1>
            </div>
        </div>
    );
}

export default JoinWindow;