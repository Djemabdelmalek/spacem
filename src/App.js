import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './Screens/Navbar';
import Home from './Screens/Home';
import Destination from './Screens/Destination'
import Crew from './Screens/Crew'
import Technology from './Screens/Technology'


function App() {
  const currentURL = window.location.pathname;
  
  return (
    <Router>
      <div>
          <Navbar link={currentURL} />

          <Routes>
            <Route exact path="/" element={<Home/>}>
              
            </Route>
            <Route path="/destination" element={<Destination />}>
              
            </Route>
            <Route path="/crew" element={<Crew />}>
              
            </Route>
            <Route path="/technology" element={<Technology />}>
              
            </Route>
    
          </Routes>  
      </div>
    </Router>
  );
}

export default App;
