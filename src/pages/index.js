import { useEffect, useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaRegUserCircle, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
          
const socialMedia = [
  {
    icon: <FaGithub/>,
    link: 'https://github.com/fairuzlokman'
  },
  {
    icon: <FaLinkedin/>,
    link: 'https://www.linkedin.com/in/fairuzlokman/'
  },
  {
    icon: <FaInstagram/>,
    link: 'https://www.instagram.com/fairuzlokman/'
  },
  {
    icon: <FaTwitter/>,
    link: 'https://twitter.com/fairuzlokman'
  },
]

export default function Home() {
  const [clicked, setClicked] = useState(false)
  
  const createBox = (num) => {
    let arr = []
    
    for (let i = 0; i < num; i++) {
      const randomColor = `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, 0.8)`
      
      arr.push(
        <div key={i} className={`p-3 ${clicked ? 'w-1/4' : 'w-full'} transition-all duration-700 aspect-square`}>
          <div
            style={{ background: `linear-gradient(to bottom right, ${randomColor}, rgba(0, 0, 0, 1))` }}
            className={`w-full h-full rounded-lg flex justify-end items-end p-3`}
          >
            <p className='font-extrabold text-3xl text-white/80'>{i + 1}</p>
          </div>
        </div>
      )
    }
  
    return arr
  }

  return (
    <div className='flex gap-2 h-screen px-2 py-6 bg-black'>
      {/* Projects and bio */}
      <div className={`w-full h-full flex ${clicked ? 'gap-0' : 'gap-2'} rounded-lg`}>
        {/* Projects */}
        <div className={`realtive ${clicked ? 'w-full' : 'w-1/5'} transition-all duration-500 h-full rounded-lg bg-white/5 overflow-y-scroll no-scrollbar`}>
          <div className='sticky top-0 bg-[#0D0D0D] bg-opacity-95 flex justify-between items-center p-5 rounded-t-lg text-white/50 font-bold'>
            <p className='hover:text-white'>Projects</p>
            <p onClick={() => setClicked(!clicked)} className='hover:text-white cursor-pointer'>{clicked ? <span>&lt;-</span> : <span>-&gt;</span>}</p>
          </div>
          <div className='flex flex-wrap px-2'>
            {createBox(30)}
          </div>
        </div>

        {/* Bio */}
        <div className={`relative ${clicked ? 'w-0 opacity-0' : 'w-4/5'} transition-all duration-500 h-full rounded-lg bg-white/5 overflow-y-scroll no-scrollbar`}>
          <div className='sticky top-0 bg-[#0D0D0D] bg-opacity-95 p-5 rounded-t-lg flex justify-between items-center'>
            <p className='w-fit text-white/50 hover:text-white font-bold'>Fairuz Lokman</p>
            <FaRegUserCircle className='text-2xl text-white/50 hover:text-white' />
          </div>
          <div className='px-5 my-3'>
            <p className='italic text-white/60'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas natus, temporibus, odit commodi soluta sequi quibusdam quasi, amet quod neque qui architecto voluptatibus cupiditate magnam facere quam assumenda explicabo iste!
              Explicabo fuga omnis facilis? Temporibus, veniam! Magnam non excepturi deleniti, autem possimus suscipit laudantium placeat exercitationem iste minus ut voluptas voluptatem aperiam nam voluptatibus nobis itaque a corrupti facere. Nisi!
              Molestiae voluptatem repellendus deserunt laborum corporis iste dolore illum quibusdam aliquam, veniam aut autem quis voluptatibus atque minus ea esse explicabo labore rerum! Eos, minima neque ratione laudantium fugiat quam.
              Assumenda porro aliquid debitis incidunt hic, maiores voluptas ipsam? Vero nihil totam autem est, veniam nobis sunt velit blanditiis obcaecati quia architecto debitis fuga, nisi voluptates facilis quis, aperiam pariatur?
              Earum corrupti consectetur quas! Explicabo possimus excepturi in voluptate eligendi temporibus totam odio animi, quos non, itaque harum eaque commodi delectus soluta labore illum consectetur nesciunt blanditiis? Laudantium, voluptatum voluptas?
            </p><br />
            <p className='italic text-white/60'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas natus, temporibus, odit commodi soluta sequi quibusdam quasi, amet quod neque qui architecto voluptatibus cupiditate magnam facere quam assumenda explicabo iste!
              Explicabo fuga omnis facilis? Temporibus, veniam! Magnam non excepturi deleniti, autem possimus suscipit laudantium placeat exercitationem iste minus ut voluptas voluptatem aperiam nam voluptatibus nobis itaque a corrupti facere. Nisi!
              Molestiae voluptatem repellendus deserunt laborum corporis iste dolore illum quibusdam aliquam, veniam aut autem quis voluptatibus atque minus ea esse explicabo labore rerum! Eos, minima neque ratione laudantium fugiat quam.
              Assumenda porro aliquid debitis incidunt hic, maiores voluptas ipsam? Vero nihil totam autem est, veniam nobis sunt velit blanditiis obcaecati quia architecto debitis fuga, nisi voluptates facilis quis, aperiam pariatur?
              Earum corrupti consectetur quas! Explicabo possimus excepturi in voluptate eligendi temporibus totam odio animi, quos non, itaque harum eaque commodi delectus soluta labore illum consectetur nesciunt blanditiis? Laudantium, voluptatum voluptas?
            </p><br />
            <p className='italic text-white/60'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas natus, temporibus, odit commodi soluta sequi quibusdam quasi, amet quod neque qui architecto voluptatibus cupiditate magnam facere quam assumenda explicabo iste!
              Explicabo fuga omnis facilis? Temporibus, veniam! Magnam non excepturi deleniti, autem possimus suscipit laudantium placeat exercitationem iste minus ut voluptas voluptatem aperiam nam voluptatibus nobis itaque a corrupti facere. Nisi!
              Molestiae voluptatem repellendus deserunt laborum corporis iste dolore illum quibusdam aliquam, veniam aut autem quis voluptatibus atque minus ea esse explicabo labore rerum! Eos, minima neque ratione laudantium fugiat quam.
              Assumenda porro aliquid debitis incidunt hic, maiores voluptas ipsam? Vero nihil totam autem est, veniam nobis sunt velit blanditiis obcaecati quia architecto debitis fuga, nisi voluptates facilis quis, aperiam pariatur?
              Earum corrupti consectetur quas! Explicabo possimus excepturi in voluptate eligendi temporibus totam odio animi, quos non, itaque harum eaque commodi delectus soluta labore illum consectetur nesciunt blanditiis? Laudantium, voluptatum voluptas?
            </p>
          </div>
        </div>
      </div>

      {/* Connect */}
      <div className='w-fit h-full flex flex-col justify-between items-center rounded-lg bg-white/5'>
        <p className='p-5 rounded-t-lg text-white/50 hover:text-white font-bold'>Connect</p>
        <div className='flex flex-col gap-10'>
          {socialMedia.map((e, i) => (
            <a target='_blank' href={e.link}>
              <span key={i} className='text-white/50 hover:text-white text-2xl'>
                {e.icon}
              </span>
            </a>
          ))}
        </div>
        <a href='mailto:fairuzlokman99@gmail.com' className='w-full rounded-b-lg text-white/50 hover:text-white flex justify-center items-center p-5 text-2xl'>
          <MdEmail/>
        </a>
      </div>
    </div>
  )
}