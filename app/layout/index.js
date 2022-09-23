import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({childern}) => {
  return (
    <>
        <Header/>
          {childern}
        <Footer />
    </>
  )
}

export default Layout