import DisplayMessages from './DisplayMessages';
import ChannelList from './ChannelList';
import UserList from './UserList';

const ChatScreen = () => {
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
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                                    <div className="users-container">
                                        <UserList />
                                        <ChannelList />
                                    </div>
                                </div>
                                <DisplayMessages />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatScreen;