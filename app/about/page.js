import HobbiesList from '../_components/hobbiesList';
import Contact from '../_components/contact';
import GetFont from '../_components/myFonts';




const ProfilePic = ({ imgSrc, context }) => {
    return (
        <div className='fixed  top-40 left-10 z-1- hidden md:block'>

            <img
                className='rounded-full shadow-lg w-100 h-100'
                src={imgSrc}
                context={context}

            />
        </div>
    );
};
export default function About() {
    // I added tracking-wider here to increase letter spacing for the whole component.
    return (
        <div className={`tracking-wider md:flex-column gap-10 p-20 ${GetFont.className}  `}>
            <ProfilePic
                imgSrc="/me2.png"
                context="profile picture"
            />
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-20">
                <div className="md:w-1/2 w-full text-center md:text-left">
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <h1 className="text-3xl"> Hi! I'm </h1>
                        <h1 className="text-3xl h1fontChangeName"> Francis Vince Jaca</h1>
                        <h1 className="text-3xl"> I love doing </h1>

                    </div>
                    <h1 className={`text-3xl`}> Mobile & Software development.</h1>


                    <br />

                    <p className="pt-5 pb-5 text-xl">
                        Are you familliar with the quote "Creating something out of nothing", because for me that's the definition of coding.
                        I want to build, learn, change, and connect with people, and for me to do that I need to work on myself as well.
                        I first started with hackathons, then moved up to web-development, and now currently I'm a mobile application developer.
                    </p>
                    <br />

                    <div className="grid grid-cols-2 gap-40">

                        <HobbiesList />


                        <Contact />

                    </div>
                    <br />


                </div>
            </div>
        </div>


    );
}