import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [clicked, setClicked] = useState(false)
  
  useEffect(() => {
    console.log(clicked);
  }, [clicked])

  return (
    <div className='flex gap-2 h-screen px-2 py-6 bg-black'>
      <div
        onClick={() => setClicked(!clicked)}
        className={`${clicked ? 'w-full' : 'w-1/4'} transition-all duration-500 h-full p-5 bg-white bg-opacity-10 rounded-lg cursor-pointer`}
      >
        <p className='w-fit text-opacity-50 hover:text-opacity-100 font-bold text-white'>Fairuz Lokman</p>
      </div>
      <div className={`${clicked ? 'w-0 px-0 opacity-0' : 'w-1/2 px-5 opacity-100'} transition-all duration-500 overflow-hidden h-full py-5 bg-white bg-opacity-10 rounded-lg`}>
        <p className='w-fit text-opacity-50 hover:text-opacity-100 font-bold text-white'>About</p>
      </div>
      <div className={`${clicked ? 'w-0 px-0 opacity-0' : 'w-1/4 px-5 opacity-100'} transition-all duration-500 overflow-hidden h-full py-5 bg-white bg-opacity-10 rounded-lg`}>
        <p className='w-fit text-opacity-50 hover:text-opacity-100 font-bold text-white'>Connect</p>
      </div>
    </div>
  )
}