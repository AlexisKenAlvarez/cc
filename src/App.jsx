import React from 'react'
import Hero from './views/Hero'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import { navList } from './utils/list'
import { usePathname } from './hooks/usePathname'

const App = () => {
    const location = usePathname()
    return (
        <>
            <div className="overflow-x-hidden text-white">
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Hero />}></Route>
                </Routes>
                <div className="absolute left-0 right-0 mx-auto bottom-6 w-fit">
                    <ul className=" flex gap-x-2">
                        {navList.map((items, i) => {
                            return (
                                <li className={`w-3 h-3 rounded-full cursor-pointer ${location === items.slug ? 'bg-rd' : 'bg-white/50'}`}></li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default App