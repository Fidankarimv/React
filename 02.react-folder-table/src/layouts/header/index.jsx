import React from 'react'
import PirimaryButton from '../../components/button'

const Header = () => {
  return (
  <header>
    <div className="container">
        <div className="header">Header</div>
        <PirimaryButton  btnText={"Header Btn"}
         />
    </div>
  </header>
  )
}

export default Header