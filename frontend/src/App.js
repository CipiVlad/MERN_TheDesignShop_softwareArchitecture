import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './App.css';
import Details from './pages/Details';
import LoginAdmin from './pages/LoginAdmin'
import Add from './pages/Add'
import Edit from './pages/Edit'
import RandomProduct from './components/RandomProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/login" element={<LoginAdmin/>}/>
          <Route path="/random" element={<RandomProduct/>}/>
          <Route path="/login/add" element={<Add/>} />
          <Route path="/login/edit/:id" element={<Edit/>} />

        </Routes>
      {/* <Footer /> */}
 
      </BrowserRouter>
    
    </div>
  );
}

export default App;
