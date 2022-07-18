// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Category from './pages/Category';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category/:id' element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
