
import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { FaPencilRuler, FaUsers } from "react-icons/fa";
import { FaDatabase, FaServer, FaGamepad } from "react-icons/fa";
import myLocalFont from './globalfont';
import { NameAnimation, TextAnimation, BlurAnimation, ComponentBlurAnimation } from "./animation";
import Displayprojct from "./displayprojct";

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"









const ServicesList = [
    { key: 'service1', value: 'Mobile App Development', Icon: FaMobileAlt, description: 'Building high-performance native and cross-platform mobile applications.' },
    { key: 'service2', value: 'Web Development', Icon: FaLaptopCode, description: 'Creating robust, scalable full-stack web applications using modern frameworks.' },
    { key: 'service3', value: 'UX/UI Design & Prototyping', Icon: FaPencilRuler, description: 'Designing intuitive user interfaces and user-centered experiences.' },
    { key: 'service4', value: 'Game Development', Icon: FaGamepad, description: 'Creative technologist who brings video games to life by turning simple mechanics to and addicting gameplay' },
    { key: 'service5', value: 'Technical Consulting', Icon: FaUsers, description: 'Providing expert guidance on technology stack and project architecture.' },
    { key: 'service6', value: 'API & Backend Services', Icon: FaServer, description: 'Implementing secure non-sql servers & API hosting set-up.' },

];

const Services = () => {
    return (

        <div className={`p-4  ${myLocalFont.className} `}>

            <div className="mt-20">
                <h1 className="h1fontChangeName text-5xl flex gap-5 md:flex-row md: justify-center uppercase md: text-3xl pb-10 ">
                    <BlurAnimation>Services</BlurAnimation>

                </h1>
                <ComponentBlurAnimation>

                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-7xl mx-auto  "
                    >
                        <CarouselContent>

                            {ServicesList.map((item, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="min-h-[250px] flex flex-col justify-between bg-white md:h-80 md:w-100">
                                            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                                <item.Icon className="text-5xl text-orange-400 mb-4" />
                                                <h3 className="text-xl font-bold mb-2">{item.value}</h3>
                                                <p className="text-sm text-gray-500">{item.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                        {/* <CarouselPrevious />
                    <CarouselNext /> */}
                    </Carousel>
                </ComponentBlurAnimation>


            </div>
            <h1 className="h1fontChangeName text-5xl flex gap-5 md:flex-row md: justify-center uppercase md: text-3xl pt-10 ">
                <BlurAnimation>Projects</BlurAnimation>

            </h1>
            <ComponentBlurAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-5 md:m-10 lg:m-20">
                    <Displayprojct
                        imgSrc={"./jpgCompass.jpg"}
                        title={"CS Compass"}
                        link={"https://github.com/ZeekHoft/Student-Compas"}
                        context={"A student navigation system for incomming first years, having access to council members, organizations, events and more."}
                        badges={[
                            { name: 'Firebase', icon: '🔥', bgColor: '#1e1610', borderColor: '#452b1e', textColor: '#ff9100' },
                            { name: 'Flutter', icon: '💙', bgColor: '#0d1729', borderColor: '#1e3a5f', textColor: '#027dfd' },
                            { name: 'Dart', icon: '🎯', bgColor: '#0a1a2f', borderColor: '#113355', textColor: '#00ccff' },
                            { name: 'GitHub', icon: '🐙', bgColor: '#0d1117', borderColor: '#30363d', textColor: '#ffffff' }

                        ]}
                    />
                    <Displayprojct
                        imgSrc={"./dappli_logo.jpg"}
                        title={"DAPPLI"}
                        link={"https://github.com/ZeekHoft/Fillipino-Food-App"}
                        context={"Scan. Cook. Enjoy. Your smart kitchen buddy DAPPLI uses AR to scan ingredients and serve up personalized, allergy-safe Filipino recipes in seconds! "}
                        badges={[
                            { name: 'Firebase', icon: '🔥', bgColor: '#1e1610', borderColor: '#452b1e', textColor: '#ff9100' },
                            { name: 'Flutter', icon: '💙', bgColor: '#0d1729', borderColor: '#1e3a5f', textColor: '#027dfd' },
                            { name: 'Dart', icon: '🎯', bgColor: '#0a1a2f', borderColor: '#113355', textColor: '#00ccff' },
                            { name: 'GitHub', icon: '🐙', bgColor: '#0d1117', borderColor: '#30363d', textColor: '#ffffff' },
                            { name: 'OpenAI', icon: '✨', bgColor: '#000000', borderColor: '#333333', textColor: '#10a37f' },


                        ]}
                    />
                    <Displayprojct
                        imgSrc={"./deception.jpg"}
                        title={"Deception Detector"}
                        link={"https://github.com/ZeekHoft/love-in-paradise"}
                        context={"Developed a browser-based fact-checking system for Philippine news claims using NLP and optional AI. "}
                        badges={[
                            { name: 'Firebase', icon: '🔥', bgColor: '#1e1610', borderColor: '#452b1e', textColor: '#ff9100' },
                            { name: 'Flutter', icon: '💙', bgColor: '#0d1729', borderColor: '#1e3a5f', textColor: '#027dfd' },
                            { name: 'Dart', icon: '🎯', bgColor: '#0a1a2f', borderColor: '#113355', textColor: '#00ccff' },
                            { name: 'GitHub', icon: '🐙', bgColor: '#0d1117', borderColor: '#30363d', textColor: '#ffffff' },
                            { name: 'OpenAI', icon: '✨', bgColor: '#000000', borderColor: '#333333', textColor: '#10a37f' },


                        ]}
                    />



                </div>
            </ComponentBlurAnimation>

        </div>
    );
};

export default Services;





















