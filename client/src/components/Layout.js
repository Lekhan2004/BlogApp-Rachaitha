import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
            <div className="flex-grow">
              <Outlet />
            </div>
        <Footer />
    </div>
  )
}

export default Layout
