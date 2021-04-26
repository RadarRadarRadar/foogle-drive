import Signup from "./authentication/Signup";
import { AuthProvider } from '../context/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './authentication/Login'
import PrivateRoute from './authentication/PrivateRoute'
import ForgotPassword from './authentication/ForgotPassword'
import UpdateProfile from './authentication/UpdateProfile'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard}/>
          <PrivateRoute path="/update-profile" component={UpdateProfile}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/forgot-password' component={ForgotPassword}/>
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;
