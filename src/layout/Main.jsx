import React from 'react'
import Homepage from '../components/Homepage'
import Navigation from '../components/Navigation'
import DivisionPage from '../components/DivisionPage'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div>


        <div className="min-h-screen bg-gray-50">
        <Navigation />
     <Outlet/>
        <Footer />
      </div>
    </div>
  )
}
