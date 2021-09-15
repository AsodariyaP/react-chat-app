import { getUsers } from '../GraphQL/Queries';

const UserList = () => {
    const users = getUsers.users;
    
    return (
        <div>
            <h5 className="ml-2">Users</h5>
            <ul className="users">
                {users.map((user) =>
                    <li className="person active-user" data-chat="person1">
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