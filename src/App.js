import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ItemsList from './pages/ItemsList';
import CartComponent from './components/CartComponent';
import { FilterComponent } from './components/FilterComponent';
import LoginPage from './pages/LoginPage';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Category/:category" element={<ItemsList />} />

        <Route path="/cartcomponent" element={<CartComponent/>} />
        <Route path='/filtercomponent' element={<FilterComponent/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
