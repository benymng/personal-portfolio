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

function App() {
  const [articles, setArticles] = useState([]);
  fetch('https://backendtesting1234.herokuapp.com/api/articles')
    .then((res) => res.json())
    .then((json) => {
      setArticles(json);
    });

  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
          <Route eact path="/" exact element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
        </Routes>
      </Router>
      <Footer />
      {/* <h1 className="font-bold underline">Article Titles</h1> */}
      {/* <ol>
        {articles.map((article) => (
          <li key={article.id}>{article.description}</li>
        ))}
      </ol>
      <PostForm /> */}
      {/* <Navigation />
      <Banner />
      <Contact /> */}
    </div>
  );
}

export default App;
