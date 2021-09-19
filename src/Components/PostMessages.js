import React, { useContext } from 'react';
import { postMessage } from '../GraphQL/Mutations';
import { ChatContext } from '../Context';


const PostMessages = () => {
    
    let textInput = React.createRef();
    
    const { selectedChannel, user } = useContext(ChatContext);

    const sendMessage = async () => {
        const text = textInput.current.value;
        if (text) {
            const response = await postMessage(selectedChannel.channelId, text, user.name);
            console.log(response);
        }
    }
    return (
        <div className="form-group mt-3 mb-0">
            <textarea className="form-control" ref={textInput} rows="3" placeholder="Type your message here..."></textarea>
            <button className="btn btn-success mt-2 float-right" onClick={sendMessage}>Send Message <span className="fa fa-paper-plane"></span></button>
        </div>
    );
};

export default PostMessages;