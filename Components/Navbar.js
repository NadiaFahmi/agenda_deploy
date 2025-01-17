import React from 'react'
import Nahla from './Images/Nahla.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex py-3 flex-wrap justify-around'>
      <h1 className='text-lg font-semibold'>Todo App
      </h1>
      <ul className='flex gap-[40px] text-m'>

        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
         <Image className='w-10 rounded-full'src={Nahla} alt='image' />


    </div>
  )
}

export default Navbar

//npm install react-notifications-component
