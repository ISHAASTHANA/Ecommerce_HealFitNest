// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Category from './pages/Category';
import Product from './pages/IndividualProduct';
import Signup from './pages/SignUp';
import UserAccount from './pages/UserAccount';
import Cart from './pages/Cart';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotPass' element={<ForgotPassword />} />
        <Route path='/reset' element={<ResetPassword/>}/>
        {/* <Route path='/category' element={<Category />} /> */}
        <Route path='categories/:categoryName' element={<Category />} />
        <Route path='item/:itemName' element={<Product />} />
        <Route path='/account' element={<UserAccount />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
