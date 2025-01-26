import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import DeliveryPage from './pages/DeliveryPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import FaqPage from './pages/FaqPage';
import NotFound from './pages/NotFound';
import CorpClients from './pages/CorpClients';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import MainLayout from './layouts/MainLayout';
import ButtonToCart from './features/ButtonToCart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="delivery&pay" element={<DeliveryPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<ButtonToCart />} />
            <Route path="corporation" element={<CorpClients />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="success" element={<SuccessPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
