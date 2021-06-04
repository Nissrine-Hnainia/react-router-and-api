import './App.css';
import { Route, Switch } from 'react-router';
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Error from "./Pages/Error"
import UserDetails from './Pages/UserDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/users/:id" render={(props) => <UserDetails {...props}/>}/>
      {/* <Route path="/about">
        <About/>
      </Route> */}
      {/* <Route path="/about" render={(props) => <About {...props} />}/> */}
      <Route path="/*" component={Error}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
