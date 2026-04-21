"use client";


import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { FaPencilRuler, FaUsers } from "react-icons/fa";
import { MdAppSettingsAlt } from "react-icons/md";

import { FaDatabase, FaServer, FaGamepad } from "react-icons/fa";
import myLocalFont from './globalfont';
import { NameAnimation, TextAnimation, BlurAnimation, ComponentBlurAnimation } from "./animation";
import Displayprojct from "./displayprojct";
import DisplayCertificate from "./displaycertificate";

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import SmoothScroll from "@/components/smoothscroll";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogHeader,
} from "@/components/ui/dialog"
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import CurrentTime from "@/components/ui/current-time";


import ListProjects from "./listproprojects";
import ListCertificates from "./listcertificates";
const IconWrapper = ({ Icon }) => (
    <div className="group relative mb-6">
        {/* Animated Yellow Glow (hidden until hover) */}
        <div className="absolute -inset-2 bg-yellow-400 rounded-2xl opacity-0 blur-xl transition duration-500 group-hover:opacity-30" />

        {/* Main Icon Container */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl
        border border-white/20 bg-white/5 backdrop-blur-sm shadow-xl transition-all duration-300
        group-hover:-translate-y-1 group-hover:bosrder-yellow-400/50 group-hover:bg-white/10">

            {/* Reflective Top Highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* The Icon - Fixed to Yellow */}
            <Icon className="relative text-3xl text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.4)]" />

            {/* Corner Accent (Top Right) */}
            <div className="absolute top-1.5 right-1.5 h-1 w-1 rounded-full bg-yellow-400 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
    </div>
);


// const ServicesList = [
//     { key: 'service1', value: 'Mobile App Development', Icon: FaMobileAlt, description: 'Building high-performance native and cross-platform mobile applications.' },
//     { key: 'service2', value: 'Web Development', Icon: FaLaptopCode, description: 'Creating  web applications using modern frameworks.' },
//     { key: 'service3', value: 'Software Development', Icon: MdAppSettingsAlt, description: 'Creating powerful and reliable software with the latest tools at hand' },
//     { key: 'service4', value: 'Game Development', Icon: FaGamepad, description: 'Creative technologist who brings video games to life by turning simple mechanics to and addicting gameplay' },
//     { key: 'service5', value: 'Technical Consulting', Icon: FaUsers, description: 'Providing expert guidance on technology stack and project architecture.' },
//     { key: 'service6', value: 'API & Backend Services', Icon: FaServer, description: 'Implementing secure non-sql servers & API hosting set-up.' },
//     { key: 'service7', value: 'SEO & Data Analytics ', Icon: FaServer, description: 'Driving organic growth through technical SEO audits, broken link reclamation, and data visualization using GA4 and Looker Studio.' },

// ];

const Services = () => {
    return (

        <div className={`p-4  ${myLocalFont.className} `}>

            {/* <h1 className="h1fontChangeName pt-10 text-5xl flex gap-5 uppercase text-center md:justify-center pt-10 md: text-3xl md:flex-row ">
                <BlurAnimation>Services</BlurAnimation>

            </h1> */}

            {/* <div className="mt-20">

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
                                        <Card className="group min-h-[250px] border-none bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/80 md:h-80">
                                            <span className="absolute top-4 right-5 text-6xl font-black text-white/[0.04] select-none leading-none">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <CardContent className="flex flex-col items-center justify-center p-6 text-center">

                                                <IconWrapper
                                                    Icon={item.Icon}
                                                    colorClass="text-blue-400" // You can keep your logic or hardcode colors here
                                                />

                                                <h3 className="mb-2 text-xl font-bold text-white">{item.value}</h3>
                                                <p className="text-sm text-slate-400">{item.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </ComponentBlurAnimation>


            </div> */}
            {/* <h1 className="h1fontChangeName pt-10 text-5xl flex gap-5 uppercase text-center md:justify-center pt-10 md: text-3xl md:flex-row ">
                <BlurAnimation>Projects & Certifcates</BlurAnimation>

            </h1> */}


            {/* Replace <DeviceFrameset> with this */}
            <div className="flex justify-center items-center py-16 px-4">
                <div className="relative">

                    {/* Outer tablet body */}
                    <div className="relative bg-zinc-900 rounded-[40px] p-4 shadow-2xl shadow-yellow-400/10"
                        style={{
                            border: '2px solid rgba(250, 204, 21, 0.15)',
                            boxShadow: '0 0 60px rgba(250,204,21,0.05), 0 30px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)'
                        }}>

                        {/* Top bar with camera */}
                        <div className="flex justify-center items-center mb-3 gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                            <div className="w-16 h-1 rounded-full bg-zinc-800" />
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                        </div>

                        {/* Screen bezel */}
                        <div className="bg-black rounded-[24px] overflow-hidden"
                            style={{
                                border: '1px solid rgba(255, 204, 0, 0.08)',
                                boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)'
                            }}>

                            {/* Fake iOS status bar */}
                            <div className="flex justify-between items-center px-6 py-2 bg-black/80">
                                <span className="text-white/40 text-[15px] font-mono">
                                    <CurrentTime />
                                </span>
                                <div className="flex gap-1 items-center">
                                    <div className="w-8 h-2.5 rounded-sm bg-yellow-400/60" />
                                    <div className="w-0.5 h-2.5 rounded-sm bg-yellow-400/40" />
                                </div>
                            </div>

                            {/* Your app grid content */}
                            <div className="bg-black p-6 w">

                                <ComponentBlurAnimation>

                                    <div className="grid grid-cols-2 gap-20 pt-10 lg:w-300 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-8 m-5 md:m-10 lg:m-20 ">


                                        <ListProjects />

                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <div className="group cursor-pointer flex flex-col items-center gap-2 w-[80px]">
                                                    <div className="w-[110px] h-[110px] rounded-[16px] overflow-hidden 
            border border-white/10 shadow-lg shadow-black/30
            transition-all duration-200 
            group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-black/40
            group-active:scale-95">
                                                        <img
                                                            src={"./thumbnail.png"}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="text-[11px] text-center text-white/80 leading-tight max-w-[72px] truncate">
                                                        Certificates
                                                    </span>
                                                </div>
                                            </DialogTrigger>
                                            <DialogContent
                                                showCloseButton={false}
                                                style={{ maxWidth: '90vw', width: '90vw' }}
                                                className="p-6"
                                                // This prevents scroll from leaking to background
                                                onWheel={(e) => e.stopPropagation()}
                                            >
                                                <DialogTitle className="text-white text-4xl h1fontChangeName text-center">Certificates Gallery</DialogTitle>
                                                <div
                                                    className="-mx-6 max-h-[70vh] overflow-y-auto px-6"
                                                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                                    onWheel={(e) => e.stopPropagation()}
                                                >
                                                    <SmoothScroll>
                                                        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

                                                        <div className="-mx-6 no-scrollbar max-h-[70vh] overflow-y-auto px-6">
                                                            <div className="space-y-6 py-2">
                                                                <ListCertificates />
                                                            </div>
                                                        </div>
                                                    </SmoothScroll>
                                                </div>
                                            </DialogContent>
                                        </Dialog>

                                    </div>
                                </ComponentBlurAnimation>
                            </div>

                            {/* Fake home bar */}
                            <div className="flex justify-center py-3 bg-black">
                                <div className="w-24 h-1 rounded-full bg-white/20" />
                            </div>
                        </div>

                        {/* Side buttons */}
                        <div className="absolute -right-1 top-24 w-1 h-12 bg-zinc-800 rounded-r-full" />
                        <div className="absolute -left-1 top-20 w-1 h-8 bg-zinc-800 rounded-l-full" />
                        <div className="absolute -left-1 top-32 w-1 h-8 bg-zinc-800 rounded-l-full" />
                    </div>

                    {/* Yellow glow underneath */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-yellow-400/10 blur-2xl rounded-full" />
                </div>
            </div>


        </div >
    );
};

export default Services;





















