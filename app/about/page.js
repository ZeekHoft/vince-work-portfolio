import HobbiesList from '../_components/service';
import Contact from '../_components/contact';
import myLocalFont from '../_components/globalfont';




const ProfilePic = ({ imgSrc, context }) => {
    return (
        // <div className='flex flex-col items-center justify-center pt-20 pb-20  md:flex md:flex-row md: items-left'>
        <div className='flex justify-center pt-20 md:justify-start md:pt-10 md:'>
            <img
                className='shadow-lg md: w-60 h-60 md:w-100 md:h-100 '
                src={imgSrc}
                context={context}

            />
        </div>
    );
};
export default function About() {
    // I added tracking-wider here to increase letter spacing for the whole component.
    return (
        <div>
            <div className={`w-full tracking-wider flex flex-col p-5 md:flex-row md:gap-10 md:p-20 ${myLocalFont.className}`}>

                <ProfilePic

                    imgSrc="/me3.jpg"
                    context="profile picture"
                />

                <div className="w-full md:w-3/4">
                    <div className=" text-center pt-5 md:text-left md:pt-10">
                        <h1 className="text-2xl md:text-3xl"> Hi! I'm
                            <span className="text-2xl md:text-3xl h1fontChangeName"> Francis Vince Jaca, </span>

                        </h1>

                        <br />

                        <p className="pt-5 pb-5 text-lg md: text-xl">
                            I'm a mobile, software, and web developer, but I mainly focus developing technologies targeting <span className='h1fontChangeName'>"THE 17 GOALS|Sustainable Development". </span>
                            Currently I'm developing an application for our start-up from the help of <span className='h1fontChangeName'>"CPUGAD"</span> called  <span className='h1fontChangeName'>"DAPPLI"</span>,
                            but other then application I've also joined many hackathons where we were tested on our skills with just a few days of development, pitching, and team-work.
                        </p>
                        <p className="pt-5 pb-5 text-lg md: text-xl">
                            And our research had just finished
                            development called <span className='h1fontChangeName'>"Deception Detector"</span> it's a way we fight misinformation within the Philippines. And through this journey we've competed on google
                            solutions (2024), visayas solutions (2024), and was selected to be one of the top 6 lightning speakers on cebu (2025).
                        </p>



                        <br />
                    </div>

                    <br />


                </div>
            </div>

            <div className="">

                <HobbiesList />
                <div className='pt-20 md:pt-5'>
                    <Contact />
                </div>

            </div>
        </div>
    );
}