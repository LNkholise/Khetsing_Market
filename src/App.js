import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const ProductDetail = lazy(() => import('./pages/Product'));
const ServiceDetail = lazy(() => import('./pages/Service'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
        </Routes>
      </Suspense>
      <Footer/>
    </Router>
  );
};

export default App;

