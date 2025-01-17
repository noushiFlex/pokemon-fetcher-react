/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar'
import Footer from './components/footer'
import Body from './pages/body'
import Pokemon from './pages/pokemon'

function App() {
  return (
    <Router>
      <main>
        <NavBar />
        <Routes>
          <Route path='/'  element={<Body />} />
          <Route path='/pokemon/:id'  element={<Pokemon />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App