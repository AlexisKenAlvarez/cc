import React from 'react'
import { motion } from 'framer-motion'

const CompanyTemplate = ({ list, title }) => {
    return (
        <div className="font-raleway">
            <h2 className='uppercase text-rd font-[800]'>{title}</h2>
            <ul className="flex flex-col gap-y-2 mt-4">
                {list.map((items, i) => {
                    return (
                        <motion.li initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: 0.4 + (i * 0.1) }} className="items-center flex gap-x-2" key={i}>
                            <div className="w-3 h-3 rounded-sm bg-rd"></div>
                            <p className="">{items}</p>
                        </motion.li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CompanyTemplate