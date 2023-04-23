import { motion } from 'framer-motion'
import React from 'react'


const Anim = (props) => {
    return (
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: props.delay }}>
            {props.children}
        </motion.div>
    )
}

export default Anim