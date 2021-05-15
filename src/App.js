import './App.css';
import Home from './pages/Home';
import Room from './pages/Room';
import SIngle_room from './pages/SIngle_room';
import Error from './pages/Error';
import {Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
     <Route exact path="/"  component={Home}/>
     <Route  path="/rooms" exact component={Room}/>
     <Route  path="/rooms/:slug" exact component={SIngle_room}/>
     <Route component={Error} />
     </Switch>
    </div>
  );
}

export default App;
