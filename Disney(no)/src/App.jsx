import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import { Header } from './pages/Header'
import { Footer } from './pages/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
