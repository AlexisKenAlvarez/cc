import React from 'react'
import Hero from './pages/Hero'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Nav from './components/Nav'
import { navList } from './utils/list'
import Nft from './pages/Nft'
import Marketplace from './pages/Marketplace'
import Companies from './pages/Companies'
import EcoGoal from './pages/EcoGoal'
import Startup from './pages/Startup'
import Roadmap from './pages/Roadmap'
import Tokenomics from './pages/Tokenomics'
import Team from './pages/Team'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const App = () => {
    const location = useLocation();
    const navigate = useNavigate()

    const handlePage = (slug) => {
        navigate(slug)
    }

    return (
        <>
            <div className="overflow-x-hidden text-white h-auto bg-blk">
                <Nav />
                <AnimatePresence mode="wait">
                    <Routes key={location.pathname} location={location} >
                        <Route exact path="/" element={<Hero />}></Route>
                        <Route exact path="/nft" element={<Nft />}></Route>
                        <Route exact path="/marketplace" element={<Marketplace />}></Route>
                        <Route exact path="/companies" element={<Companies />}></Route>
                        <Route exact path="/economy&goal" element={<EcoGoal />}></Route>
                        <Route exact path="/startup" element={<Startup />}></Route>
                        <Route exact path="/roadmap" element={<Roadmap />}></Route>
                        <Route exact path="/tokenomics" element={<Tokenomics />}></Route>
                        <Route exact path="/team" element={<Team />}></Route>
                    </Routes>
                </AnimatePresence>

                <div className="fixed left-0 right-0 mx-auto bottom-6 w-fit lg:block hidden">
                    <ul className=" flex gap-x-2">
                        {navList.map((items, i) => {
                            return (
                                <p onClick={() => handlePage(items.slug)} className="">
                                    <li className={`w-3 h-3 rounded-full cursor-pointer ${location.pathname === items.slug ? 'bg-rd' : 'bg-white/50'}`} key={i}>

                                    </li>
                                </p>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default App