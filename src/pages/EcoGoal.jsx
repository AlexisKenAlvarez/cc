import React from 'react'
import PageTrans from '../anim/PageTrans'
import Anim from '../anim/Anim'

const EcoGoal = () => {
    return (
        <PageTrans>
            <section className="w-full h-auto min-h-screen bg-blk relative flex items-start py-20">

                <h1 className="text-white/10 text-[10rem] absolute bottom-0 -right-20 font-[700] md:block hidden">ECONOMY</h1>

                <div className="bg-rd/80 w-[18rem] h-[18rem] rounded-full absolute blur-[13rem] bottom-32 right-32"></div>

                <div className="text-white font-raleway px-10 max-w-[1500px] w-full mx-auto mt-[4rem]">

                    <div className="">
                        <Anim delay={0.1}>
                            <h3 className='text-rd font-[700]'>ECO</h3>
                            <h1 className="font-[800] text-5xl 2xl:text-6xl">ECONOMY</h1>
                        </Anim>
                        <div className="max-w-[50rem] mt-4 2xl:text-xl font-[400] flex flex-col gap-y-5">
                            <Anim delay={0.2}>
                                <p className="">
                                    CC will be the native token of Crypto companies with a supply of 100.000.000M CC NFT will play a big part in the economy of CC. For each business purpose there will be a limited amount of NFT’s that will receive airdrops based on the net profit of the business that belongs to that NFT.
                                </p>
                            </Anim>
                            <Anim delay={0.3}>
                                <p className="">
                                    Rewards will be paid monthly with at the end of the year and after the books of that year are closed an extra airdrop reward based on the net profit of that year. Rewards will be paid out 50% USDT &#40;bep20&#41; and 25% CC &#40;native token&#41; to encourage holding the native token we choose the pay the majority of the rewards in USDT. This will satisfy the NFT holder be earning their rewards and keep a percentage in the native token. The other 25% will be used to buyback and burn native token and make the token an attractive token to hold.
                                </p>
                            </Anim>
                        </div>
                    </div>

                    <div className="max-w-[50rem] mt-10">
                        <Anim delay={0.4}>
                            <h3 className='text-rd font-[700]'>GOAL</h3>
                            <h1 className="font-[800] text-5xl 2xl:text-6xl">OUR GOAL</h1>
                        </Anim>

                        <Anim delay={0.5}>
                            <p className="mt-4 font-[400] 2xl:text-xl">
                                The team of CC aims to set up 100+ companies in the coming years online and offline. Our goal to have revenue over 100 million US dollar in the coming 10 years. And you can become a part of this 100million dollar + company. Earn passive income from the rewards that CC is sending to its NFT holders. NFT that you can resell and will become more valuable by the time as the companies grows. This makes CC a long term and sustainable project.
                            </p>
                        </Anim>
                    </div>

                </div>

            </section>
        </PageTrans>
    )
}

export default EcoGoal