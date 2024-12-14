import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import UsersTable from "./components/UsersTable";
import { UserProvider } from "./UserContext";
import AddUser from "./components/AddUser";

function App() {
  return (
   <div>
    <Router>
      <Switch>
        <UserProvider>
          <NavBar />
          <Route exact path="/" component= {UsersTable}></Route>
          <Route exact path="/" >
            <Link bg="dark" to="/adduser" className="d-flex justify-content-center btn btn-primary btn-sm">Add User</Link>
          </Route>
          <Route exact path="/adduser" component= {AddUser}></Route>
        </UserProvider>
      </Switch>
      <br /><br /><br />
      <div className="text-sm text-secondary bg-light float-right">&nbsp;&nbsp;&nbsp;Release Version: {process.env.REACT_APP_VERSION}&nbsp;&nbsp;&nbsp;</div>
    </Router>
   </div>
  );
}

export default App;