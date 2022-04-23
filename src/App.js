/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// import Container from './components/Container/Container.component';
import Navbar from './components/navbar/navbar.component';
import Hero from './pages/hero/hero.component';
import Login from './pages/login/login.page';
import Register from './pages/register/register.page';
import UserProfile from './pages/user/user.page';
import CandidateProfile from './pages/candidate/candidate.page';
import Stats from './pages/stats/stats.page';
import Admin from './pages/admin/admin';

function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/user" component={UserProfile} />
        <Route exact path="/user" component={UserProfile} />
        <Route exact path="/stats" component={Stats} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/candidate" component={CandidateProfile} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
