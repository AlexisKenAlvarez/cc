import React from 'react'
import { token } from '../utils/list'

const Tokenomics = () => {
    return (
        <section className="w-full h-auto min-h-screen bg-blk relative flex items-start py-20">

            <h1 className="text-white/10 text-[10rem] absolute bottom-0 -right-20 font-[700] md:block hidden">TOKENOMICS</h1>

            <div className="bg-rd/80 w-[18rem] h-[18rem] rounded-full absolute blur-[13rem] bottom-32 right-32"></div>

            <div className="text-white font-raleway px-10 max-w-[1500px] w-full mx-auto mt-[4rem]">

                <div className="font-raleway">
                    <h3 className='text-rd font-[700] uppercase'>TOKEN</h3>
                    <h1 className="font-[800] text-5xl 2xl:text-6xl">Tokenomics</h1>

                    <div className="max-w-[50rem] mt-4 2xl:text-xl text-lg flex flex-col gap-y-2">
                        <h2 className='font-bold'>100.000.000 total supply</h2>

                        {token.map((items, i) => {
                            return (
                                <h2 key={i}>{items}</h2>
                            )
                        })}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Tokenomics