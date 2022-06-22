import { Landing } from "./components/Landing";
import { useState } from "react";
import { PostForm } from "./components/PostForm";
import { Banner } from "./components/Banner";
import { Navigation } from "./components/Navigation";
import { ContactForm } from "./components/ContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import TestimonialsPage from "./pages/TestimonialsPage";
import { AddBlog } from "./pages/AddBlog";
import { BlogPage } from "./components/BlogPage";
import { PageNotFound } from "./pages/PageNotFound";
import { DeletePage } from "./pages/DeletePage";
import { EditBlog } from "./pages/EditBlog";
import { AddTestimonial } from "./pages/AddTestimonial";
import { AdminLogin } from "./components/AdminLogin";
import { Admin } from "./pages/Admin";
import { AdminSignup } from "./components/AdminSignup";
import { AboutPage } from "./pages/AboutPage";

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
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/delete/:slug" element={<DeletePage />} />
          <Route path="/edit/:slug" element={<EditBlog />} />
          <Route path="/add-testimonial" element={<AddTestimonial />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
