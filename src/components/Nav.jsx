import React, { useState, useEffect } from 'react'
import { usePathname } from '../hooks/usePathname'
import { RiMenu4Fill } from 'react-icons/ri'
import { MdClose } from 'react-icons/md'
import { navList } from '../utils/list'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    const path = usePathname()
    const [navActive, setNav] = useState(false)
    const navigate = useNavigate()

    const [scrolled, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position >= 100) {
            setScrollPosition(true);
        } else {
            setScrollPosition(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleOpen = () => {
        setNav(true)
    }

    const handleClose = () => {
        setNav(false)
    }

    const handlePage = (slug) => {
        navigate(slug)
    }

    return (
        <nav className={`w-full flex items-center justify-between max-w-[1500px] p-4 px-7 mx-auto left-0 right-0 z-[30] fixed top-0 ${scrolled ? 'bg-black/40' : ''}`}>

            <div className={`transition-all ease-in-out duration-300  absolute top-0 right-0 h-screen w-[20rem] bg-[#252525] text-white xl:hidden block ${navActive ? '' : 'translate-x-full'}`} >
                <MdClose className='text-4xl top-5 right-5 absolute' onClick={handleClose} />

                <ul className="items-center font-raleway flex flex-col mt-28 gap-y-8">
                    {navList.map((items, i) => {
                        return (
                            <li className="w-fit relative" key={i}>
                                <p onClick={() => handlePage(items.slug)} className="font-[600]">{items.label}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <img src="/logo.webp" alt="Logo" className="w-16" />

            <RiMenu4Fill className='text-4xl xl:hidden cursor-pointer select-none' onClick={handleOpen} />

            <ul className="items-center gap-x-12 font-raleway xl:flex hidden">
                {navList.map((items, i) => {
                    return (
                        <li className="w-fit relative group" key={i}>
                            <p onClick={() => handlePage(items.slug)} className="font-[600] cursor-pointer">{items.label}</p>
                            <div className="w-0 h-[4px] mx-auto bg-rd absolute -bottom-2 left-0 right-0 group-hover:w-5 transition-width ease-in-out duration-100" style={path === items.slug ? { width: '1.25rem' } : {}}></div>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav