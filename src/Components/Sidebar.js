import React, { useContext } from 'react'
import UserList from './UserList';
import ChannelList from './ChannelList';
import { ChatContext } from '../Context'


const SideBar = () => {
    const chatData = useContext(ChatContext);
    console.log(chatData);
    return (
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
            <div className="users-container">
                <UserList />
                <ChannelList />
            </div>
        </div>
    );
}

export default SideBar;