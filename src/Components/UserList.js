
import React, { useContext } from 'react';
import { getUsers } from '../GraphQL/Queries';
import { ChatContext } from '../Context';

const UserList = () => {
    const users = getUsers.users;
    const { setData, user } = useContext(ChatContext);

    // className="person active-user"
    // className={`app ${isActive ? "danger" : ""}`

    return (
        <div>
            <h5 className="ml-2">Users</h5>
            <ul className="users">
                {users.map((user, index) =>
                    <li className="person" id={index} key={user.userId} data-chat="person1" onClick={(e) => setData('user', user)}>
                        <div className="user">
                            <img src={user.userId === 'Sam' ? 'https://www.bootdey.com/img/Content/avatar/avatar4.png' : user.userId === 'Russell' ? 'https://www.bootdey.com/img/Content/avatar/avatar3.png' : 'https://www.bootdey.com/img/Content/avatar/avatar1.png'} alt="Retail Admin" />
                        </div>
                        <p className="name-time">
                            <span className="name">{user.name}</span>
                        </p>
                    </li>
                )}
            </ul>
        </div>
    )
};

export default UserList;