
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// PAGES
import Home from "./pages/home/home";
import SignIn from "./pages/signin/signin";
import SignUp from "./pages/signup/signup";
import User from "./pages/user/user";
import Error from "./pages/notfound/notfound";

// LAYOUTS
import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";



// ROUTES & HEADER / FOOTER
function App() {
  return (
    <Router>
      
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
    
    </Router>
  );
};
export default App;
