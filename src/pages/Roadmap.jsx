import React from 'react'
import { roadList } from '../utils/list'
import RoadmapTemplate from '../components/RoadmapTemplate'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import PageTrans from '../anim/PageTrans';

const Roadmap = () => {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };


    return (
        <PageTrans>
            <section className="w-full h-auto min-h-screen bg-blk relative flex items-start py-20">

                <h1 className="text-white/10 text-[10rem] absolute bottom-0 -right-20 font-[700] md:block hidden">Roadmap</h1>
                <div className="bg-rd/80 w-[18rem] h-[18rem] rounded-full absolute blur-[13rem] bottom-32 right-32"></div>
                <div className="text-white font-raleway px-10 max-w-[1500px] w-full mx-auto mt-[4rem]">

                    <div className="text-center">
                        <h3 className='text-rd font-[700] uppercase'>OUR PATH</h3>
                        <h1 className="font-[800] text-5xl 2xl:text-6xl uppercase">Roadmap</h1>
                    </div>

                    <div className="flex flex-wrap gap-x-10 w-fit mx-auto mt-5">
                        <Slider {...settings} className='xl:max-w-[68rem] md:max-w-[46rem] max-w-[19rem]' >
                            {roadList.map((items, i) => {
                                return (
                                    <RoadmapTemplate list={items} q={i + 1} key={i} />
                                )
                            })}
                        </Slider>
                    </div>

                </div>

            </section>
        </PageTrans>
    )
}

export default Roadmap