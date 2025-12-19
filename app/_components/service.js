
import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { FaPencilRuler, FaUsers } from "react-icons/fa";
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




const IconWrapper = ({ Icon }) => (
    <div className="group relative mb-6">
        {/* Animated Yellow Glow (hidden until hover) */}
        <div className="absolute -inset-2 bg-yellow-400 rounded-2xl opacity-0 blur-xl transition duration-500 group-hover:opacity-30" />

        {/* Main Icon Container */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-yellow-400/50 group-hover:bg-white/10">

            {/* Reflective Top Highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* The Icon - Fixed to Yellow */}
            <Icon className="relative text-3xl text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.4)]" />

            {/* Corner Accent (Top Right) */}
            <div className="absolute top-1.5 right-1.5 h-1 w-1 rounded-full bg-yellow-400 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
    </div>
);


const ServicesList = [
    { key: 'service1', value: 'Mobile App Development', Icon: FaMobileAlt, description: 'Building high-performance native and cross-platform mobile applications.' },
    { key: 'service2', value: 'Web Development', Icon: FaLaptopCode, description: 'Creating  web applications using modern frameworks.' },
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
                                        <Card className="group min-h-[250px] border-none bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/80 md:h-80">
                                            <CardContent className="flex flex-col items-center justify-center p-6 text-center">

                                                {/* Use the new IconWrapper here */}
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
                        {/* <CarouselPrevious />
                    <CarouselNext /> */}
                    </Carousel>
                </ComponentBlurAnimation>


            </div>
            <h1 className="h1fontChangeName pt-10 text-5xl flex gap-5 uppercase text-center md:justify-center pt-10 md: text-3xl md:flex-row ">
                <BlurAnimation>Projects & Certifcates</BlurAnimation>

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
                            { name: 'OpenAI', icon: '✨', bgColor: '#000000', borderColor: '#333333', textColor: '#10a37f' },
                            { name: 'JavaScript', icon: '💛', bgColor: '#1e1c11', borderColor: '#3e3515', textColor: '#f7df1e' },

                            {
                                name: 'Tailwind',
                                icon: '🌊',
                                bgColor: '#0f172a',
                                borderColor: '#1e293b',
                                textColor: '#38bdf8'
                            },

                            {
                                name: 'CSS',
                                icon: '🎨',
                                bgColor: '#0a192f',
                                borderColor: '#112240',
                                textColor: '#2965f1'
                            }

                        ]}
                    />



                </div>
            </ComponentBlurAnimation>
            <div className="m-5 md:m-10 lg:m-20">
                <DisplayCertificate
                    imgSrc={"./cs50.jpg"}
                    alt={"cs50"}
                    title={"CS50 Certificate Completed on 2023"}
                    context={"Gaining a CS50 Certificate provides proof of foundational computer science skills in languages like C, Python, SQL, JS, HTML/CSS, plus concepts like algorithms & data structures, demonstrating discipline and problem-solving to employers, even if it's not a formal degree, by showing you can tackle challenging problems and build projects, which is great for resumes, LinkedIn, and boosting confidence for further learning. "}
                    link={"https://home.edx.org/"}
                />
                <DisplayCertificate
                    imgSrc={"./aws.jpg"}
                    alt={"aws"}
                    title={"AWS Cloud Practitoner Certificate Completed 2025"}
                    context={"Gaining the AWS Cloud Practitioner certificate gives me a foundational cloud knowledge, validates your AWS understanding for employers, boosts your resume with an in-demand credential, and serves as an excellent starting point for technical roles (like Architect, Developer) or enhances non-technical roles (Sales, Marketing, PM) by improving cloud fluency and communication, leading to better career opportunities and increased credibility in the booming cloud industry. "}
                    link={"https://aws.amazon.com/certification/certified-cloud-practitioner/"}
                />
                <DisplayCertificate
                    imgSrc={"./cpugad.jpg"}
                    alt={"cpugad"}
                    title={"Central Launch 2.0: Startup Hackathon 2025"}
                    context={"Awarded for participating in the Western Visayas Startup Hackathon at Central Philippine University. This experience involved collaborating in a high-pressure environment to ideate and prototype technological advancements for the local startup ecosystem. It validates my commitment to innovation, rapid development, and the ability to pitch technological solutions to real-world business challenges."}
                    link={"https://www.facebook.com/profile.php?id=61556789063072"}
                />
                <DisplayCertificate
                    imgSrc={"./solutions.jpg"}
                    alt={"solutions"}
                    title={"Google Solution Challenge 2024 Certificate"}
                    context={"Developed a 'Vision Detect' AI system using Python and TensorFlow to measure spatial distances between objects and navigation paths. This project highlights my expertise in computer vision, specifically in object detection and spatial awareness algorithms. By submitting this for the Google Solution Challenge, I demonstrated how AI can be leveraged to improve navigation and safety, showcasing a practical application of machine learning to solve complex environmental interaction problems."}
                    link={"https://developers.google.com/community/gdsc-solution-challenge"}
                />


            </div>


        </div>
    );
};

export default Services;





















