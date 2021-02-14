
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import { AuthProvider } from './Auth';

function App() {


  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
