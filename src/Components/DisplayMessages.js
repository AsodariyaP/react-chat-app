import { getMessages} from '../GraphQL/Queries';

const DisplayMessages = () => {
    const messages = getMessages.data.fetchLatestMessages.sort((a, b) => { return a.messageId - b.messageId });
    const selectedUser = 'Russell';

    const formatTime = (date) => {
        const d = new Date(date);
        return d.getHours() + ':' + d.getMinutes();
    }

    return (
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
            <div className="selected-user">
                <span className="name">Emily Russell</span>
            </div>
            <div className="chat-container">
                <ul className="chat-box chatContainerScroll" >
                    {messages.map((message) =>
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
                <div className="form-group mt-3 mb-0">
                    <textarea className="form-control" rows="3" placeholder="Type your message here..."></textarea>
                    <button className="btn btn-success mt-2 float-right"><b>Send Message</b> <span className="fa fa-paper-plane"></span></button>
                </div>
            </div>
        </div>
    )
};

export default DisplayMessages;