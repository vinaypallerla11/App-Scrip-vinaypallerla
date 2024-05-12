import React from 'react';
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Shop from './components/Shop'
import Stories from './components/Stories'
import Contactus from './components/Contactus'
import Productstabs from './components/Productstabs' 
import Recommend from './components/Recommend'
import Products from './components/Products'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/shop' element={<Shop />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<Contactus />} />
        </Routes>
      </BrowserRouter>
      <Productstabs />
      <Recommend />
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
