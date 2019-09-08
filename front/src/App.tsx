import './App.css';


import Login from './routes/login/login';
import Main from './routes/main/main';
import Nomatch from './routes/nomatch/nomatch';
import Posts from './routes/posts/posts';


import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/header/header';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <hr/>

          <div>
            <Switch>
              <Route exact={true} path="/" component={Main}/>
              <Route path="/posts" component={Posts}/>
              <Route path="/login" component={Login}/>
              <Route component={Nomatch}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
