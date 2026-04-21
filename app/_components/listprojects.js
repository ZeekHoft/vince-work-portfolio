import React from 'react'
import Displayprojct from "./displayprojct";

export default function ListProjects() {
    return (
        <>
            <Displayprojct
                imgSrc={"./compass2.jpg"}
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
                    { name: 'GitHub', icon: '🐙', bgColor: '#0d1117', borderColor: '#30363d', textColor: '#ffffff' }


                ]}
            />
            <Displayprojct
                imgSrc={"./deception.png"}
                title={"Deception Detector"}
                link={"https://the-deception-detector.vercel.app/home"}
                context={"Developed a browser-based fact-checking system for Philippine news claims using NLP and optional AI. "}
                badges={[
                    {
                        name: 'Next.js', icon: '▲', bgColor: '#000000', borderColor: '#333333', textColor: '#ffffff'
                    },
                    { name: 'Firebase', icon: '🔥', bgColor: '#1e1610', borderColor: '#452b1e', textColor: '#ff9100' },

                    { name: 'OpenAI', icon: '✨', bgColor: '#000000', borderColor: '#333333', textColor: '#10a37f' },
                    { name: 'JavaScript', icon: '💛', bgColor: '#1e1c11', borderColor: '#3e3515', textColor: '#f7df1e' },
                    { name: 'Tailwind', icon: '🌊', bgColor: '#0f172a', borderColor: '#1e293b', textColor: '#38bdf8' },
                    { name: 'CSS', icon: '🎨', bgColor: '#0a192f', borderColor: '#112240', textColor: '#2965f1' },
                    {
                        name: 'Docker', icon: '🐳', bgColor: '#0db7ed', borderColor: '#00578a', textColor: '#ffffff'
                    },
                    { name: 'GitHub', icon: '🐙', bgColor: '#0d1117', borderColor: '#30363d', textColor: '#ffffff' }

                ]}
            />
            <Displayprojct
                imgSrc={"./likely.png"}
                title={"Likely Blogs"}
                link={"https://blog-crud-two.vercel.app"}
                context={"A simple sight where you can post things that have or likely to happen in your life "}
                badges={[

                    {
                        name: 'Next.js', icon: '▲', bgColor: '#000000', borderColor: '#333333', textColor: '#ffffff'
                    },
                    {
                        name: 'Tailwind', icon: '🌊', bgColor: '#0f172a', borderColor: '#1e293b', textColor: '#38bdf8'
                    },
                    {
                        name: 'Shadcn', icon: '🔘', bgColor: '#030712', borderColor: '#1f2937', textColor: '#ffffff'
                    },
                    {
                        name: 'Drizzle', icon: '💧', bgColor: '#1a1d12', borderColor: '#3a3f24', textColor: '#c5f200'
                    },
                    {
                        name: 'Neon', icon: '⚡', bgColor: '#000000', borderColor: '#1a1a1a', textColor: '#00e599'
                    },

                    { name: 'GitHub', icon: '🐙', bgColor: '#0d1117', borderColor: '#30363d', textColor: '#ffffff' }


                ]}
            />
            <Displayprojct
                imgSrc={"./layers.jpg"}
                title={"Lead Gen Website"}
                link={"https://project-leads-hub.vercel.app"}
                context={"a marketing tool specifically designed to convert visitors into potential customers (leads) by collecting their contact information, usually through forms in exchange for services. "}
                badges={[

                    {
                        name: 'Next.js', icon: '▲', bgColor: '#000000', borderColor: '#333333', textColor: '#ffffff'
                    },
                    {
                        name: 'Tailwind', icon: '🌊', bgColor: '#0f172a', borderColor: '#1e293b', textColor: '#38bdf8'
                    },
                    {
                        name: 'Shadcn', icon: '🔘', bgColor: '#030712', borderColor: '#1f2937', textColor: '#ffffff'
                    },
                    {
                        name: 'Drizzle', icon: '💧', bgColor: '#1a1d12', borderColor: '#3a3f24', textColor: '#c5f200'
                    },
                    {
                        name: 'Neon', icon: '⚡', bgColor: '#000000', borderColor: '#1a1a1a', textColor: '#00e599'
                    },

                    { name: 'GitHub', icon: '🐙', bgColor: '#0d1117', borderColor: '#30363d', textColor: '#ffffff' },
                    {
                        name: 'Tailark', icon: '⚡', bgColor: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)', borderColor: '#9B99FE', textColor: '#2BC8B7'
                    }

                ]}
            />


            <Displayprojct
                imgSrc={"./callblog.png"}
                title={"Callblog"}
                link={"https://callblog.vercel.app"}
                context={"An automated AI content genrator for blogs that caters the idea of businesses."}
                badges={[

                    {
                        name: 'TypeScript', icon: '🟦', bgColor: '#3178c6', borderColor: '#235a97', textColor: '#ffffff'
                    },
                    {
                        name: 'React', icon: '⚛️', bgColor: '#23272f', borderColor: '#149eca', textColor: '#149eca'
                    },
                    {
                        name: 'n8n', icon: '🐙', bgColor: '#ff6d5a', borderColor: '#e05646', textColor: '#ffffff'
                    },
                    {
                        name: 'AI Gemini', icon: '🧠', bgColor: '#4f46e5', borderColor: '#4338ca', textColor: '#ffffff'
                    },
                    {
                        name: 'Supabase', icon: '⚡', bgColor: '#1c1c1c', borderColor: '#2e2e2e', textColor: '#3ecf8e'
                    }
                ]}
            />


            <Displayprojct
                imgSrc={"./fast-api.png"}
                title={"FastAPI Blog"}
                link={"https://github.com/ZeekHoft/fastapi-blog"}
                context={"A blog posting project created with the sole purpose of learning and understanding how FastAPI works. This project has the generic features of a normal blogposting site, authentication, CRUD, database, file and API route management."}
                badges={[
                    { name: 'FastAPI', icon: '⚡', bgColor: '#05998b1a', borderColor: '#05998b', textColor: '#05998b' },

                    { name: 'SQLAlchemy', icon: '🛢️', bgColor: '#1e1e1e', borderColor: '#d71f1f', textColor: '#ffffff' },
                    { name: 'aiosqlite', icon: '📁', bgColor: '#003b571a', borderColor: '#003b57', textColor: '#00a3e0' },

                    { name: 'Pydantic', icon: '✅', bgColor: '#e920631a', borderColor: '#e92063', textColor: '#e92063' },
                    { name: 'PyJWT', icon: '🔑', bgColor: '#1c1c1c', borderColor: '#fb015b', textColor: '#ffffff' },

                    { name: 'Jinja2', icon: '🔥', bgColor: '#1a1a1a', borderColor: '#b41717', textColor: '#ffffff' },
                    { name: 'Rich', icon: '🌈', bgColor: '#0c0c0c', borderColor: '#af00ff', textColor: '#af00ff' },

                    { name: 'Sentry', icon: '🦉', bgColor: '#362d591a', borderColor: '#362d59', textColor: '#ffffff' },
                ]}
            />
            <Displayprojct
                imgSrc={"./garble.png"}
                title={"Garble Encryption"}
                link={"https://github.com/ZeekHoft/Garble"}
                context={"A CLI tool made for encrypting txt files, to store in your secrets and trusting my software to hide its content in the most safest way."}
                badges={[
                    {
                        name: 'Python', icon: '🐍', bgColor: '#101a24', borderColor: '#1f3d5a', textColor: '#3776ab'
                    },

                    {
                        name: 'CLI', icon: '💻', bgColor: '#1a1a1a', borderColor: '#333333', textColor: '#4ade80'
                    },

                    {
                        name: 'Textual', icon: '📟', bgColor: '#170c32', borderColor: '#3c1e70', textColor: '#ab7df8'
                    }
                ]}
            />
        </>
    )
}
