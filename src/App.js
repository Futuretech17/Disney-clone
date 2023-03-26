import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from '/Github/disney-clone/src/components/Login'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/'>
        <Login />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
