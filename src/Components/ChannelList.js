import React, { useContext } from 'react'
import { getChannelList } from '../GraphQL/Queries';
import { ChatContext } from '../Context'


const ChannelList = () => {
    const { setData } = useContext(ChatContext);
    const channels = getChannelList.channels;
    return (
        <div>
            <h5 className="ml-2 mt-4">Channels</h5>
            <ul className="users">
                {channels.map((channel) =>
                    <li className="person" onClick={() => setData('channel', channel)}>
                        <p className="name-time">
                            <span className="name">{channel.name}</span>
                        </p>
                    </li>
                )}
            </ul>
        </div>
    )
};

export default ChannelList;