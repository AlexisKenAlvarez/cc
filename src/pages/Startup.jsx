import React from 'react'
import { startupList } from '../utils/list'

const Startup = () => {
    return (
        <section className="w-full h-auto min-h-screen bg-blk relative flex items-start py-20">

            <h1 className="text-white/10 text-[10rem] absolute bottom-0 -right-20 font-[700] md:block hidden">STARTUP</h1>
            <div className="bg-rd/80 w-[18rem] h-[18rem] rounded-full absolute blur-[13rem] bottom-32 right-32"></div>
            <div className="text-white font-raleway px-10 max-w-[1500px] w-full mx-auto mt-[4rem]">

                <div className="">
                    <h3 className='text-rd font-[700] uppercase'>START</h3>
                    <h1 className="font-[800] text-5xl 2xl:text-6xl uppercase">Startup time</h1>

                    <div className="max-w-[50rem] mt-4 2xl:text-xl flex flex-col gap-y-6">
                        <p className="font-bold">
                            Companies start ups can take time.
                        </p>

                    </div>

                    <div className="font-raleway">
                        <ul className="flex flex-col gap-y-4 mt-4">
                            {startupList.map((items, i) => {
                                return (
                                    <li className="flex gap-x-2" key={i}>
                                        <div className="w-3 h-3 rounded-sm bg-rd mt-[5px] flex-shrink-0">

                                        </div>
                                        <p className="max-w-[50rem]"><span className='font-bold uppercase'>{items.title},</span> {items.meaning}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Startup