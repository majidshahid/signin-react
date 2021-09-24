import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../containers/Login';
import Signup from "../containers/Signup";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
        </Router>
    )
}

export default AppRouter;