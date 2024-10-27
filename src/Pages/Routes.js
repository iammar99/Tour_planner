import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'


import Header from 'Components/Header'
import Footer from 'Components/Footer'
import Home from './Home'
import Agent from './Agent'

export default function Index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agent' element={<Agent/>} />
      </Routes>
      <Footer />
    </>
  )
}
