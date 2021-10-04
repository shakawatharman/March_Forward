import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Registration from './Components/Registration/Registration';
import About from './Components/About/About';
import  NotFound  from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
        <Router>
        <Header />
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/services">
                <Services></Services>
            </Route>
            <Route path="/registration">
                <Registration></Registration>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
