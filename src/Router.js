// 외부 자원 INCLUDE
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import MainMenu from './Pages/MainMenu/MainMenu';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Tweets from './Pages/Tweets/Tweets';


// CLASS 선언
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/tweets" component={Tweets} />
        </Switch>
      </Router>
    )
  }
}

// 외부에서 사용가능하도록 export시킴
export default Routes;
