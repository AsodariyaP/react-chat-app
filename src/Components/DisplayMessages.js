import React, { useContext } from 'react';
import { getMessages } from '../GraphQL/Queries';
import { ChatContext } from '../Context';
import PostMessages from './PostMessages';


const DisplayMessages = () => {
    const { selectedChannel, chatData, user } = useContext(ChatContext);
    // const messages = getMessages.data.fetchLatestMessages.sort((a, b) => { return a.messageId - b.messageId });
    const selectedUser = user.userId;

    const formatTime = (date) => {
        const d = new Date(date);
        return d.getHours() + ':' + d.getMinutes();
    }

    return (
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
            <div className="selected-user">
                <span className="name">{selectedChannel.name} {user.id}</span>
            </div>
            <div className="chat-container">
                <ul className="chat-box chatContainerScroll" >
                    {chatData.map((message) =>
                        <div>
                            {selectedUser !== message.userId && (
                                <li className='chat-left' key={message.messageId}>
                                    <div className="chat-avatar">
                                        <img src={message.userId === 'Sam' ? 'https://www.bootdey.com/img/Content/avatar/avatar4.png' : message.userId === 'Russell' ? 'https://www.bootdey.com/img/Content/avatar/avatar3.png' : 'https://www.bootdey.com/img/Content/avatar/avatar1.png'} alt="Retail Admin" />
                                        <div className="chat-name">{message.userId}</div>
                                    </div>
                                    <div className="chat-text">{message.text}</div>
                                    <div className="chat-hour">{formatTime(message.datetime)} <span className="fa fa-check-circle"></span></div>
                                </li>
                            )}

                            {selectedUser === message.userId && (
                                <li className="chat-right" key={message.messageId}>
                                    <div className="chat-hour">{formatTime(message.datetime)} <span className="fa fa-check-circle"></span></div>
                                    <div className="chat-text">{message.text}</div>
                                    <div className="chat-avatar">
                                        <img src={message.userId === 'Sam' ? 'https://www.bootdey.com/img/Content/avatar/avatar4.png' : message.userId === 'Russell' ? 'https://www.bootdey.com/img/Content/avatar/avatar3.png' : 'https://www.bootdey.com/img/Content/avatar/avatar1.png'} alt="Retail Admin" />
                                        <div className="chat-name">{message.userId}</div>
                                    </div>
                                </li>
                            )}
                        </div>
                    )}
                </ul>
                <PostMessages />
            </div>
        </div>
    )
};

export default DisplayMessages;