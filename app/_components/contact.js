import myLocalFont from './globalfont';


const SocialLink = ({ href, iconSrc, altText, text }) => {
    return (
        // 1. Base Container: Sets up layout and hover effect
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"

            className="flex items-center space-x-2 bgColorWhite rounded-lg p-2 
                 w-92 md:w-16 md:hover:w-100 md:transition-all md:duration-700 md:ease-in-out 
                 md:shadow-lg md:hover:shadow-xl group"
        >
            <img
                src={iconSrc}
                width="37"
                height="25"
                alt={altText}
                className="flex-shrink-0"
            />

            <span

                className="textColorGreen text-xl font-semibold whitespace-nowrap 
                   md:opacity-0  group-hover:opacity-100 transition-opacity 
                   delay-150"
            >
                {text}
            </span>
        </a>
    );
};

export default function Page() {
    return (
        <div >
            <div className="tracking-wide">
                <h1 className="text-3xl"> Contact me through
                    <span className="h1fontChangeName"> here </span>

                </h1>

            </div>

            <div className="flex flex-col gap-10 pt-5 md: items-center">

                <div className="flex flex-col gap-4">
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
                    <SocialLink
                        iconSrc="/call.png"
                        altText="Call Logo"
                        text="(63+) 09081927243"
                    />
                </div>
            </div>
        </div>

    );
}