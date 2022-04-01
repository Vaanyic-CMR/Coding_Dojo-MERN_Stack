import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Message from './Message';

const Chat = props => {
    const { name } = props;
    const [socket] = useState(() => io(':8000'));

    const [ messages, setMessages ] = useState([]);
    const messageForm = useRef();
    const messageList = useRef();

    useEffect(() => {
        socket.on("new_user", data => console.log(data));

        socket.on("new_user_from_server", msg => 
            setMessages( prevMessages => [ ...prevMessages, msg ] ) );
        socket.on("new_message_from_server", msg => 
            setMessages( prevMessages => [ ...prevMessages, msg ] ) );
        
        return () => socket.disconnect(true);
    }, []);

    const sendMessage = e => { e.preventDefault()
        const msg = messageForm.current;
        const data = { name, text: msg["msg"].value };
        setMessages( prevMessages => [ ...prevMessages, data ] )

        // messageList.scrollTop = messageList.scrollHeight;

        socket.emit("new_message_from_client", data);
    }

    return (
        <div
            className="border border-solid border-dark bg-secondary"
        >
            <div className="row pt-5 m-1"
                style={{overflowY:"scroll", height:"500px"}}
                ref={ messageList }
            >
                {
                    messages.map( (message, index) => 
                        message.name === name?
                        <Message owner message={ message } key={index}/>
                        :<Message message={ message } key={index}/>
                    )
                }
            </div>
            <form
                onSubmit={ sendMessage }
                ref={ messageForm }
                className="row p-3"
            >
                <input
                    className="form-control border-dark col"
                    name="msg"
                />
                <div className="col-2 h-100">
                    <button
                        className="btn btn-primary border border-dark mt-2 ps-3 pe-3"
                    >Send</button>
                </div>
            </form>
        </div>
    );
}
export default Chat;