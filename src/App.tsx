/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
}
