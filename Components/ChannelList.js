import { getChannelList } from '../GraphQL/Queries';

const ChannelList = () => {

    const channels = getChannelList.channels;

    const selectChannel = (e) => {
        console.log(e);
    }

    return (
        <div>
            <h5 className="ml-2 mt-4">Channels</h5>
            <ul className="users">
                {channels.map((channel) =>
                    <li className="person" data-chat="person1" onClick={selectChannel}>
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