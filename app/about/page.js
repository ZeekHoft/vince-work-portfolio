import HobbiesList from '../_components/hobbiesList';
import Contact from '../_components/contact';
import myLocalFont from '../_components/globalfont';




const ProfilePic = ({ imgSrc, context }) => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center pt-20 pb-20'>

            <img
                className='rounded-full shadow-lg md: w-70 h-70 md: w-100 h-100 '
                src={imgSrc}
                context={context}

            />
        </div>
    );
};
export default function About() {
    // I added tracking-wider here to increase letter spacing for the whole component.
    return (
        <div className={`w-full tracking-wider flex-col md:flex-row p-5 md:p-20 ${myLocalFont.className}`}>
            <ProfilePic

                imgSrc="/me2.png"
                context="profile picture"
            />
            <div className="flex flex-colitems-center justify-center md:flex-row md:pl-30 md:pr-30  ">
                <div className=" w-full text-center md:text-center">
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <h1 className="text-3xl"> Hi! I'm
                            <span className="text-3xl h1fontChangeName"> Francis Vince Jaca </span>
                            <span className="text-3xl ">I love doing </span>
                            <span className="text-3xl ">Mobile & Software development.</span>



                        </h1>
                        <h1 className="text-3xl"> </h1>

                    </div>
                    <h1 className={`text-3xl`}> </h1>


                    <br />

                    <p className="pt-5 pb-5 text-xl">
                        Are you familliar with the quote "Creating something out of nothing", because for me that's the definition of coding.
                        I want to build, learn, change, and connect with people, and for me to do that I need to work on myself as well.
                        I first started with hackathons, then moved up to web-development, and now currently I'm a mobile application developer.
                    </p>
                    <br />

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40">

                        <HobbiesList />
                        <div className='pt-20'>
                            <Contact />
                        </div>

                    </div>
                    <br />


                </div>
            </div>
        </div>


    );
}