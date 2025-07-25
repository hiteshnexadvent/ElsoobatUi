import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function Base() {
  return (
      <div>
          
          <Header></Header>
      <Main></Main>
      <div className="footer pt-5">
        <Footer/>
      </div>
          

    </div>
  )
}
