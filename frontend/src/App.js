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
import Subcategory from './pages/Subcategory';
import IndividualProduct from './pages/IndividualProduct';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotPass' element={<ForgotPassword />} />
        <Route path='/reset' element={<ResetPassword />} />
        <Route path='categories/:categoryName' element={<Category />} />
        <Route path='categories/:categoryName/:subCategoryName' element={<Subcategory />} />
        <Route path='item/:itemName' element={<Product />} />
        <Route path='/product' element={<IndividualProduct />} />
        <Route path='/account' element={<UserAccount />} />
        <Route path='/cart/:cartId' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export { App, UserContext };
