// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Category from './pages/Category';
import Product from './pages/IndividualProduct';
import Signup from './pages/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
        {/* <Route path='/category' element={<Category />} /> */}
        <Route path='category/:id' element={<Category />} />
        <Route path='product' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
