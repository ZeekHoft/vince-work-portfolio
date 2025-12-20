import myLocalFont from './globalfont';
// import { BlurAnimation, ComponentBlurAnimation } from './animation';
import { BlurAnimation, ComponentBlurAnimation } from './animation';
const SocialLink = ({ href, iconSrc, altText, text }) => {
    return (
        // 1. Base Container: Sets up layout and hover effect
        <div >
            <ComponentBlurAnimation>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="flex items-center space-x-2 bg-slate-900/50 md:font-bold duration-300 hover:bg-slate-900/80 rounded-lg p-2 
                 w-92 md:w-16 md:hover:w-100 md:transition-all md:duration-700 md:ease-in-out 
                 md:hover:shadow-[0_0_40px_rgba(250,204,21,0.1)] group"
                >
                    <img
                        src={iconSrc}
                        width="37"
                        height="25"
                        alt={altText}
                        className="flex-shrink-0"
                    />

                    <span

                        className="text-white text-lg font-semibold whitespace-nowrap font-bold
                   md:opacity-0  group-hover:opacity-100 transition-opacity 
                   delay-150 md: text-xl"
                    >
                        {text}
                    </span>
                </a>
            </ComponentBlurAnimation>
        </div>
    );
};

export default function Page() {
    return (
        <div className={` ${myLocalFont.className}`} >
            <div className="tracking-wide">
                <h1 className="h1fontChangeName text-5xl flex gap-5 md:flex-row md: justify-center uppercase md: text-3xl ">
                    <BlurAnimation>Contact</BlurAnimation>

                </h1>

            </div>

            <div className='pt-10 pb-20 px-4'>
                <ComponentBlurAnimation>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3/4 lg:w-1/2 mx-auto border border-white/10  bg-slate-900/40 rounded-2xl overflow-hidden border border-white/5 p-1 shadow-2xl transition-all
        duration-500 hover:bg-slate-900/80 hover:border-yellow-400/30 hover:shadow-[0_0_30px_rgba(250,204,21,0.1)]">



                        <div className='p-8 md:p-10 flex items-center justify-center md:justify-start border-b border-white/5 md:border-b-0 md:border-r'>
                            <p className="text-zinc-400 text-md leading-relaxed hover:text-zinc-300 transition-colors text-center md:text-left ">
                                I'm always open to new opportunities and love collaborating with people who are passionate about their craft. If you
                                think I'd be a great fit for your team or project, I'd love to hear from you let's connect!
                            </p>                        </div>
                        <div className='flex flex-col gap-y-4 p-6 md:p-10 items-center md:items-start'>
                            <SocialLink
                                href="https://www.linkedin.com/in/francis-vince-jaca-359532305"
                                iconSrc="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg"
                                altText="LinkedIn logo"
                                text="Connect on LinkedIn"
                            />

                            <SocialLink
                                href="https://www.facebook.com/francisvince.jaca"
                                iconSrc="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/facebook/default.svg"
                                altText="Facebook logo"
                                text="Find me on Facebook"
                            />

                            <SocialLink
                                // href="mailto:francisvincecj@gmail.com"
                                iconSrc="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/gmail/default.svg"
                                altText="Gmail logo"
                                text="francisvincecj@gmail.com"
                            />

                        </div>


                    </div>
                </ComponentBlurAnimation>
            </div>
        </div>

    );
}