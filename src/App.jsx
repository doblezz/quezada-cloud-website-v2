import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/private/home";
// import QuienesSomos from "./pages/quienes-somos";
// import QuezadaOnline from "./pages/quezadaonline";
// import Sucursales from "./pages/sucursales";
// import Contacto from "./pages/contacto";
// import Footer from "./components/footer/Footer";
// import PageNotFound from "./pages/404";
// import Blog from "./pages/Blog";
// import Post from "./pages/Post";
// Components
import Navbar from "@components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="quezada-online" element={<QuezadaOnline />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="sucursales" element={<Sucursales />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/post/:id" element={<Post />} /> */}
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;