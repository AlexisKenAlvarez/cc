import React from 'react'
import { motion } from 'framer-motion'
import PageTrans from '../anim/PageTrans'

const Nft = () => {
    return (
        <PageTrans>
            <section className="w-full h-auto min-h-screen bg-blk relative flex items-start py-20">

                <h1 className="text-white/10 text-[10rem] absolute bottom-0 -right-20 font-[700] md:block hidden">CC NFT</h1>

                <div className="bg-rd/80 w-[18rem] h-[18rem] rounded-full absolute blur-[13rem] bottom-32 right-32"></div>

                <div className="text-white font-raleway px-10 max-w-[1500px] w-full mx-auto mt-[4rem]">

                    <div className="">
                        <h3 className='text-rd font-[700]'>NFT</h3>
                        <h1 className="font-[800] text-5xl 2xl:text-6xl">CC NFT</h1>

                        <div className="max-w-[50rem] mt-4 2xl:text-xl font-[400]">
                            <p className="">
                                With a wide variation of businesses you can choose in whatever business you want to invest in. By buying a NFT of the business you become a share holder and become a part of the first invest2earn web3 crypto token company.
                            </p>

                            <p className="">
                                To get an allocation in the NFT sale you need to stake the native token. Offering a variety of NFT’s for certain kind of business models like; Apps, gamble, video stream, influencer database, online clothing store, online real estate agency but also physical business like an tyre shop or window cleaner.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-[50rem] mt-10">
                        <h3 className='text-rd font-[700]'>HOW</h3>
                        <h1 className="font-[800] text-5xl 2xl:text-6xl">HOW DOES IT WORK?</h1>

                        <p className="mt-4 font-[400] 2xl:text-xl">
                            If you buy a NFT for &#40;example&#41; online casino you will get monthly your rewards based on the net profit of the casino. Model 500 NFT worth $100 = $50.000 The $50.000 will be used to build the casino and advertisement. Monthly profits will be divided over the NFT holders in a ratio 50% USDT and 25% native token to reduce sell pressure. The other 25% will be used to buyback and burn the native token
                        </p>
                    </div>

                </div>

            </section>
        </PageTrans>

    )
}

export default Nft