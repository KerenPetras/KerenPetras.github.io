import React, { useEffect } from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  useEffect(() => {
    document.title = 'Call Me, Keren Petras';
  }, []);

  return (
    <>
    <Router>
      <Header />
        <AnimRoutes />
    </Router>
    </>
  )
};

export default App;
