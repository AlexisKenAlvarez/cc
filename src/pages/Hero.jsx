import React from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import PageTrans from '../anim/PageTrans'

const Hero = () => {
    return (
        <PageTrans>
            <section className="bg-blk w-full h-screen text-white relative overflow-hidden font-raleway flex items-center py-20">

                <img src="/bg.webp" alt="Background" className="absolute top-0 bottom-0 w-full h-full object-cover" />
                <motion.img initial={{ y: 50, opacity: 0, scale: 0.7 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: 0.1 }} src="/hero.webp" alt="" className="right-0 bottom-0 absolute object-cover h-full lg:block hidden" />

                <div className="bg-rd/60 w-[15rem] h-[15rem] rounded-full absolute blur-[10rem]"></div>
                <div className="bg-rd/60 w-[15rem] h-[15rem] rounded-full absolute blur-[10rem] bottom-0 left-[30rem]"></div>


                <div className="font-raleway relative z-10 max-w-[1500px] w-full mx-auto px-10 text-center lg:text-left">



                    <div className="font-[800] text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                        <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: 0.1 }} >CC THE FIRST WEB</motion.h1>
                        <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: 0.2 }} >NFT <span className='text-rd'>INVEST</span>2<span className='text-rd'>EARN</span> PROJECT</motion.h1>
                    </div>


                    <div className="max-w-[50rem] mt-2 mx-auto lg:mx-0">
                        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: 0.3 }} className="font-[500]">
                            Be able to participate in company start ups and earn rewards as an early adopter of the company via NFT’s. Earn a share in its wide range of companies and profit share on its annual net profit. You can become a shareholder in a company by holding the NFT and earn rewards of the company you choose to invest in.
                        </motion.p>
                    </div>

                    <a href="" className="" target="_blank" rel="noopener noreferrer">
                        <motion.button initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: 0.4 }} className="bg-rd px-9 py-4 font-raleway font-[700] rounded-md mt-14">
                            BUY TOKEN
                        </motion.button>
                    </a>

                </div>


            </section>
        </PageTrans>

    )
}

export default Hero