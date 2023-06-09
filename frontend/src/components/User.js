import React from 'react';
const UserItem = ({ user }) => {
    return (
        <tr>
            <td>
                {user.firstname}
            </td>
            <td>
                {user.lastname}
            </td>
            <td>
                {user.email}
            </td>
            <td>
                {user.username}
            </td>
        </tr>
    )
}


const UserList = ({ users }) => {
    return (
        <table>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Username</th>
            {users.map((user)=><UserItem user={user}/>)}
        </table>
    )
}

export default UserList