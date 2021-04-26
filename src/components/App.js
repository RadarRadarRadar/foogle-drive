import Signup from "./authentication/Signup";
import { AuthProvider } from '../context/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Profile from './authentication/Profile'
import Login from './authentication/Login'
import PrivateRoute from './authentication/PrivateRoute'
import ForgotPassword from './authentication/ForgotPassword'
import UpdateProfile from './authentication/UpdateProfile'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Foogle Drive Routes */}

          
          {/* Profile Routes */}
          <PrivateRoute path="/user" component={Profile}/>
          <PrivateRoute path="/update-profile" component={UpdateProfile}/>

          {/* Auth Routes */}
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/forgot-password' component={ForgotPassword}/>
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;
