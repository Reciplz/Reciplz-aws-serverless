import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Splash: React.FC = () => {
  return (
    <div className="items-center p-4 text-2xl ">
      Splash
      <Link to='/dashboard'><button className="bg-black p-2 text-white absolute right-0 top-0">Sign In</button></Link>
    </div>
  )
}

export default Splash
