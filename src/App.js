import { Landing } from './components/Landing';
import { useState } from 'react';
import { PostForm } from './components/PostForm';
import { Banner } from './components/Banner';
import { Navigation } from './components/Navigation';
import { ContactForm } from './components/ContactForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Contact from './pages/Contact';
import TestimonialsPage from './pages/TestimonialsPage';
import { AddBlog } from './pages/AddBlog';

function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
          <Route eact path="/" exact element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="add-blog" element={<AddBlog />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
