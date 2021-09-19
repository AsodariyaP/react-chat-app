import React, { useState } from 'react';
import { ChatProvider } from '../Context'
import DisplayMessages from './DisplayMessages';
import SideBar from './Sidebar';
import { fetchLatestMessage } from '../GraphQL/Queries'

const ChatList = () => {

    const [selectedChannel, setSelectedChannel] = useState({
        'channelId': '1',
        'name': 'General Channel'
    });
    const [user, setUser] = useState({
        'userId': 'Sam',
        'name': 'Sam'
    });
    const [chatData, setchatData] = useState([]);

    const setData = (action, data) => {
        if (action === 'channel') {
            setSelectedChannel(data);
            getLatestChatData(data.channel);
        } else if (action === 'user') {
            setUser(data);
        }
    }

    const getLatestChatData = async (channelId) => {
        const response = await fetchLatestMessage(channelId);
        console.log(response);
        setchatData(response);
    }

    getLatestChatData(selectedChannel);

    return (
        <div className="container">
            <div className="page-title">
                <div className="row gutters">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <h5 className="title">Chat App</h5>
                    </div>
                </div>
            </div>

            <div className="content-wrapper">
                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card m-0">
                            <div className="row no-gutters">
                                <ChatProvider value={{ setData, selectedChannel, chatData, user }}>
                                    <SideBar />
                                    <DisplayMessages />
                                </ChatProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatList;