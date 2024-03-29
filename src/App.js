import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home } from './Home';
import { About } from './About';
import { Layout } from './components/Layout';
import { Navigationbar } from './components/Navigationbar';
import { Jumbotron } from './components/Jumbotron';



class App extends Component {
  render() {
  return (
 <React.Fragment>
   <Navigationbar />
   <Jumbotron />
   <Layout>
   <Router>
     <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/About" component={About} />
   </Switch>
   </Router>
   </Layout>
 </React.Fragment>
  );
}
}

export default App;
