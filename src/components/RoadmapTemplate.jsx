import React from 'react'
import { motion } from 'framer-motion'

const RoadmapTemplate = ({ list, q }) => {
    return (
        <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.16, 0.77, 0.47, .97] }} className="md:w-[21rem] w-[19rem] h-[28rem] bg-rd rounded-lg border-t-8 border-white relative md:mx-4 text-white font-raleway">

            <img src="/roadleft.webp" alt="Element" className="absolute bottom-5 left-5" />
            <img src="/roadright.webp" alt="Element" className="absolute bottom-5 right-5" />

            <h1 className='text-center mt-6 text-3xl font-bold'>Q{q}</h1>

            <ul className="p-5 px-7 flex flex-col">
                {list.map((items, i) => {
                    return (
                        <li className="flex gap-x-3" key={i}>
                            <div className="w-2 h-2 rounded-sm bg-white flex-shrink-0 mt-[6px]"></div>
                            <p className="">{items}</p>
                        </li>
                    )
                })}
            </ul>

        </motion.div>
    )
}

export default RoadmapTemplate