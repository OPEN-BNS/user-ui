import { useContext, useEffect } from "react";
import { Table } from "react-bootstrap"
import { UserContext } from "../UserContext";
import UserRow from "./UserRow";
import api from "../Api"

const UsersTable = () => {

    const [users, setUsers] = useContext(UserContext)

    const fetchUsers = async () => {
        const resp = await api.get("users");
        console.log(resp)
        setUsers({data:resp.data});    
    }

    useEffect(()=>{
        fetchUsers();
    }, [])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Encrypted Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.data.map((user) => (
                        <UserRow
                            id = {user.id}
                            username = {user.username}
                            name = {user.name}
                            email={user.email}
                            password={user.password}
                        />
                    ))}
                    { 
                        users.data.length == 0 ? <h1>No user found!</h1> : <h1></h1> 
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default UsersTable;