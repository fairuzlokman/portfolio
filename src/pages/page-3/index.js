import Image from 'next/image';
import { useState, useEffect } from 'react';

const Page3 = () => {
  const [activeIndex, setActiveIndex] = useState(46);
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
                break;
            case 'ArrowUp':
                setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 20 : prevIndex));
                break;
            case 'ArrowRight':
                setActiveIndex((prevIndex) => (prevIndex < 199 ? prevIndex + 1 : prevIndex));
                break;
            case 'ArrowDown':
                setActiveIndex((prevIndex) => (prevIndex < 199 ? prevIndex + 20 : prevIndex));
                break;  
            default:
                break;
        }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative">
        <div className="h-screen flex flex-wrap overflow-hidden bg-black">
        {Array.from({ length: 200 }, (_, i) => (
            <div
                key={i}
                className={`w-[5%] aspect-square bg-white outline text-6xl font-bold flex justify-center items-center ${
                    i === activeIndex ? 'bg-slate-400 animate-bounce' : ''
                } transition-all`}
            >
                {
                    i === 46 ? <p>F</p> :
                    i === 47 ? <p>A</p> : 
                    i === 48 ? <p>I</p> : 
                    i === 49 ? <p>R</p> : 
                    i === 50 ? <p>U</p> : 
                    i === 51 ? <p>Z</p> : 
                    null
                }
            </div>
        ))}
        </div>
        <div className="absolute top-20 right-56">
            <Image
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                src="/assets/me.png"
                width={800}
                height={800}
                alt="me"
                className="hover:-rotate-[30deg] transition-all duration-500 object-cover w-[300px] border-4 border-black aspect-square rounded-full"
            />
            <div className={`${isHover ? "block" : "hidden"} bg-white absolute top-1/3 right-3/4 outline rounded-3xl rounded-tr-none`}>
                <p className="w-fit whitespace-nowrap p-5 text-lg font-semibold">Biasa maksudnya?</p>
            </div>
        </div>
    </div>
  );
};

export default Page3;
