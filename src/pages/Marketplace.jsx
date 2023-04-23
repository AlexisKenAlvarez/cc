import React from 'react'
import PageTrans from '../anim/PageTrans'
import Anim from '../anim/Anim'

const Marketplace = () => {
    return (
        <PageTrans>
            <section className="w-full h-auto min-h-screen bg-blk relative flex items-start py-20">

                <h1 className="text-white/10 text-[10rem] absolute bottom-0 -right-20 font-[700] md:block hidden">MARKET</h1>

                <div className="bg-rd/80 w-[18rem] h-[18rem] rounded-full absolute blur-[13rem] bottom-32 right-32"></div>

                <div className="text-white font-raleway px-10 max-w-[1500px] w-full mx-auto mt-[4rem]">

                    <div className="">
                        <Anim delay={0.1}>
                            <h3 className='text-rd font-[700] uppercase'>MARKET</h3>
                            <h1 className="font-[800] text-5xl 2xl:text-6xl">MARKETPLACE</h1>
                        </Anim>
                        <div className="max-w-[50rem] mt-4 2xl:text-xl flex flex-col gap-y-6">
                            <Anim delay={0.2}>
                                <p className="">
                                    The NFT will be able to sell on Opensea there where they can increase in value as there is limited supply of 500 Make up NFT’s and as the net profit of the store will grow the value of the NFT will grow too due to increasing rewards.
                                </p>
                            </Anim>
                            <Anim delay={0.3}>
                                <p className="">
                                    Each NFT will have its own price and how much NFT’s will be offered based on the business that will be set up.
                                </p>
                            </Anim>
                            <Anim delay={0.4}>
                                <p className="">

                                    The Dapp that shows your nft’s and current rewards on it is a nice feature to track to profits made by your companies/NFT’s
                                </p>
                            </Anim>
                        </div>
                    </div>

                </div>

            </section>
        </PageTrans>

    )
}

export default Marketplace