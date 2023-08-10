import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ItemsList from './pages/ItemsList';
import CartComponent from './components/CartComponent';
import { FilterComponent } from './components/FilterComponent';
import LoginPage from './pages/LoginPage';
import MyWishlist from './components/MyWishlist';
import OtpVerification from './components/OtpVerification';
import { Profile } from './pages/Profile';
import ProfileInformation from './components/ProfileInformation';
import ManageAddressesPage from './pages/ManageAddressPage';
import { MyCoupons } from './components/MyCoupons';
import GiftcardStore from './pages/GiftcardStore';
import { GiftCardComponent } from './components/GiftCardComponent';
import { Notifications } from './components/Notifications';
import { EmptyAddress } from './components/EmptyAddress';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Category/:category" element={<ItemsList />} />
        <Route path="/giftcards" element={<GiftcardStore />} />
        <Route path="/cartcomponent" element={<CartComponent />} />
        <Route path='/filtercomponent' element={<FilterComponent />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='my-wishlist' element={<MyWishlist />} />
        <Route path='otp-verif' element={<OtpVerification />} />
        <Route path='/account' element={<Profile />}>
          <Route path="/account/profile" element={<ProfileInformation />} />
          <Route path="/account/wishlist" element={<MyWishlist />} />
          <Route path="/account/MyCoupons" element={<MyCoupons />} />
          <Route path="/account/notifications" element={<Notifications />} />

        </Route>
        <Route path="/giftcardcomp" element={<GiftCardComponent />} />
        <Route path="/empty-address" element={<EmptyAddress />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
