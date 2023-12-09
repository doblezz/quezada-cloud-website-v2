import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ratesStore from './helpers/context/rates/ratesStore';
const Home = lazy(() => import('./pages/private/home'));
import LazyLoading from '@components/LazyLoading';
import Navbar from '@components/Navbar';

const App = observer(() => {

  useEffect(() => {
    ratesStore.fetchRates();
  }, []);

  if (!ratesStore.rates) {
    // Muestra un indicador de carga mientras se obtienen los datos
    return <LazyLoading />;
  }
  // Accede a los datos de ratesStore.rates
  const ratesData = ratesStore.rates;

  return (
    <Router>
      <Suspense fallback={<LazyLoading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home rates={ratesData} />} />
        </Routes>
      </Suspense>
    </Router>
  );
});

export default App;
