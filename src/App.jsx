import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/private/home")); // Reemplaza 'Home' con el nombre real de tu componente
// const QuezadaOnline = lazy(() => import('./'));
import LazyLoading from "@components/LazyLoading";
import Navbar from "@components/Navbar";
import './api/services/getRatesServices';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LazyLoading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="quezada-online" element={<QuezadaOnline />} /> */}
          {/* ... otros componentes */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
