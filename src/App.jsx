import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './screens/about/About';
import Home from './screens/home/Home';
import NotFound from './screens/notFound/NotFound'
import Projects from './screens/projects/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route
        path="/"
        element={<Home />}
        />

        <Route
        path="/projects"
        element={<Projects />}
        />

        <Route
        path="/about"
        element={<About />}
        />
        
        <Route
        path="*"
        element={<NotFound/>}
        />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;