import React from 'react'
import { motion } from 'framer-motion'

const TeamTemplate = ({ position, name }) => {
    return (
        <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.16, 0.77, 0.47, .97] }} className="w-[17rem] h-[20rem] bg-rd rounded-lg border-t-8 border-white relative text-white font-raleway rounded-br-3xl">

            <img src="/roadleft.webp" alt="Element" className="absolute bottom-5 left-5" />

            <div className="w-[11rem] h-[10rem] mt-8 bg-[#A73139] mx-auto rounded-lg relative">
                <img src="/profile.webp" alt="profile" className='w-[95%] h-full absolute left-0 right-0 mx-auto bottom-0' />
            </div>

            <div className="absolute left-10 bottom-4">
                <h1 className='font-bold text-xl'>{position}</h1>
                <h2>{name}</h2>
            </div>


        </motion.div>
    )
}

export default TeamTemplate