import React from 'react'
import Navbar from './component/Navbar/Navbar'
import './App.css'
import Header from './component/Header/Header'
import ContactForm from './component/ContactForm/ContactForm'

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <ContactForm/>
    </>
  )
}

export default App