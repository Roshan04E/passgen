import React from 'react'
import PasswordGenerator from './components/passwordGenerator/PasswordGenerator'
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coffee from './components/coffee/Coffee';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<PasswordGenerator />} />
        <Route path='/coffee' element={<Coffee />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App