import { useEffect, useState } from "react"

const pages = [
    { page: "home" },
    { page: "about" },
    { page: "projects" },
    { page: "hobby" },
    { page: "contact" },
]

const Page2 = () => {
    const [domLoaded, setDomLoaded] = useState(false)
    
    useEffect(() => {
        setDomLoaded(true)
    }, [])
    
    return (
        <>
            {domLoaded && (
                <div className="relative bg-gradient-to-b from-blue-500 to-indigo-800">
                    <header className="fixed w-full bg-slate-200 flex justify-between items-center px-10 py-5 font-bold">
                        <a href="#home">Fairuz Lokman</a>
                        <div className="flex">
                            <a className="px-4 py-2 hover:bg-white/10 rounded-full" href="#about">About</a>
                            <a className="px-4 py-2 hover:bg-white/10 rounded-full" href="#projects">Projects</a>
                            <a className="px-4 py-2 hover:bg-white/10 rounded-full" href="#hobby">Hobby</a>
                            <a className="px-4 py-2 hover:bg-white/10 rounded-full" href="#contact">Contact</a>
                        </div>
                    </header>
                    <body>
                        {pages.map((e, i) => (
                            <section
                                key={i}
                                id={e.page}
                                className="h-screen flex justify-center items-center text-5xl text-white font-bold"
                            >
                                {e.page.charAt(0).toUpperCase() + e.page.slice(1)}
                            </section>
                        ))}
                    </body>
                </div>
            )}
        </>
    )
}

export default Page2