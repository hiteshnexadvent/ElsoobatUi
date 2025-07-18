import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Base from './components/Base';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>

          <Route path='/' element={<Base></Base>}></Route>
          <Route path='/about' element={<About></About>}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
