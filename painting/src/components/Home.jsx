import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-[60vh] item-center relative justify-between'>
        <img  className='w-full absolute h-[100%] ' src="https://www.artplacer.com/wp-content/uploads/2022/05/New-header-fairs-2.jpg" alt="" />
       <div className='px-24 py-48'>
        <h1 className='text-5xl font-bold absolute text-black'>Unique Exhibation of Digital Arts</h1>
        <p className='text-pink-500 mt-5 mb-10 absolute py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, velit provident. <br /> Ipsum quas, incidunt saepe deserunt alias dolorum at ut unde./</p>
        <button className=' mt-32 absolute bg-black text-white py-3 px-5 hover:bg-green-700'>get started</button>
       </div>
    
    </div>
  )
}
  


export default Home