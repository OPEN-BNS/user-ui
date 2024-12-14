import react, {useState} from "react"
import {Link, useHistory } from "react-router-dom"
import {Form, Button, Card} from "react-bootstrap"
import api from "../Api"

const AddUser = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        username : "",
        name : "",
        email: ""
    })

    const updateForm = (e) => {
        setUser(
            {...user, [e.target.name] : [e.target.value] }
        )
    }

    const postData = async (e) => {
        e.preventDefault();
        console.log(user.username[0])
        console.log(user.name[0])
        console.log(user.email[0])
    
        await api.post("users/", {
            username: user.username[0],
            name : user.name[0],
            email: user.email[0]
        }).then(function (response) {
            console.log("User added successfully"+response)
            setUser({
                username: "",
                name: "",
                email: ""
            });
            history.push("/");
        }).catch(function (error){
            console.log("Failed to add user" + error)
        });
    }

    const gotoUserTable = (e) => {
        history.push("/");
    }

    return(
        <Card>
            <Card.Body>
                <Form onSubmit = {postData}>
                    <Form.Group controlId="UserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" 
                            value={user.username} onChange = {updateForm} placeholder="Username" />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name"
                        value={user.name} onChange = {updateForm} placeholder="Name" />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" value={user.email} onChange = {updateForm}  
                            placeholder="Email" />
                    </Form.Group>
                    <br />
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" className="w-100">
                            Save User
                        </Button>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" className="w-100" onClick={gotoUserTable}>
                            View Users
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default AddUser