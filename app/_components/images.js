
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";



const Imagescarousel = ({ imagesSrc = [] }) => {
    return (
        <div className='flex items-center '>
            <Carousel className='w-full max-w-7xl mx-auto  '>
                <CarouselContent className="-ml-4">
                    {imagesSrc.map((img, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/6  ">
                            <div className="relative md:flex md:items-center   shadow-2xl backdrop-blur-md 
                            transition-all duration-500 hover:border-yellow-400/40 hover:shadow-[0_0_40px_rgba(250,204,21,0.1)] overflow-hidden">
                                <img
                                    height={img.height}
                                    width={img.width}
                                    src={img.src}
                                    alt={`Slide ${index}`}
                                    className="transition-transform duration-500 hover:rotate-3"
                                />
                            </div>


                        </CarouselItem>


                    ))}



                </CarouselContent>
            </Carousel>
        </div>
    )
}



function AmazingImages() {
    const myImages = [
        { src: "/me3.jpg" },
        { src: "/me4.jpg" },
        { src: "/me5.jpg" },
        { src: "/me6.jpg" },
        { src: "/me3.jpg" },


    ];
    return (
        <div className='p-10'>
            {/* <Imagescarousel imagesSrc={myImages} /> */}
        </div>
    )
}

export default AmazingImages


