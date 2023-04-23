import React from 'react'
import TeamTemplate from '../components/TeamTemplate'

const Team = () => {


    return (
        <section className="w-full h-auto min-h-screen bg-blk relative flex items-start py-20">

            <h1 className="text-white/10 text-[10rem] absolute bottom-0 -right-20 font-[700] md:block hidden">OUR TEAM</h1>
            <div className="bg-rd/80 w-[18rem] h-[18rem] rounded-full absolute blur-[13rem] bottom-32 right-32"></div>
            <div className="text-white font-raleway px-10 max-w-[1700px] w-full mx-auto mt-[4rem]">

                <div className="text-center">
                    <h3 className='text-rd font-[700] uppercase'>OUR PATH</h3>
                    <h1 className="font-[800] text-5xl 2xl:text-6xl uppercase">Team</h1>
                </div>

                <div className="flex flex-wrap gap-8 w-fit mx-auto mt-5 justify-center">
                    <TeamTemplate position="CEO" name="Giedo mensinga Doxx" />
                    <TeamTemplate position="CFO" name="Danny" />
                    <TeamTemplate position="General Manager" name="Jules DOXX" />
                    <TeamTemplate position="NFT Artist" name="Chap iemand" />
                    <TeamTemplate position="Community Manager" name="Easy" />




                </div>

            </div>

        </section>
    )
}

export default Team