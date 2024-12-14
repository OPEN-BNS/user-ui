
const UserRow = ({id, username, name, email, password}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
        </tr>
    );
}

export default UserRow