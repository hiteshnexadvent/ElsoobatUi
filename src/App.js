import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Base from './components/Base';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './slides/Contact';
import Cursor from './slides/Cursor';
import Blogs from './slides/Blogs';
import BlogRead from './slides/BlogRead';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

      {/* <Cursor></Cursor> */}

      <ToastContainer position="top-right" autoClose={3000} />
      
      <Router>
        <Routes>

          <Route path='/' element={<Base></Base>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/service' element={<Service></Service>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/blog' element={<Blogs></Blogs>}></Route>
          <Route path='/blogread' element={<BlogRead></BlogRead>}></Route>
          

        </Routes>
      </Router>

    </div>
  );
}

export default App;
