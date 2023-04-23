import React from 'react'
import Hero from './pages/Hero'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import { navList } from './utils/list'
import { usePathname } from './hooks/usePathname'
import Nft from './pages/nft'
import Marketplace from './pages/Marketplace'
import Companies from './pages/Companies'
import EcoGoal from './pages/EcoGoal'
import Startup from './pages/Startup'
import Roadmap from './pages/Roadmap'
import Tokenomics from './pages/Tokenomics'
import Team from './pages/Team'

const App = () => {
    const location = usePathname()

    console.log(location)

    return (
        <>
            <div className="overflow-x-hidden text-white h-auto">
                <Nav />
                <Routes>
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
                <div className="fixed left-0 right-0 mx-auto bottom-6 w-fit lg:block hidden">
                    <ul className=" flex gap-x-2">
                        {navList.map((items, i) => {
                            return (
                                <li className={`w-3 h-3 rounded-full cursor-pointer ${location === items.slug ? 'bg-rd' : 'bg-white/50'}`} key={i}></li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default App