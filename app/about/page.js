import HobbiesList from '../_components/hobbiesList';
export default function About() {

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-20">
            <div>
                <img
                    src="/me2.png"
                    alt="Picture of the author"
                    // className="rounded-lg shadow-lg p-3 mb-5 bg-body w-full h-auto"
                    className='rounded-full shadow-lg '
                />

            </div>
            <div className="md:w-1/2 w-full text-center md:text-left">
                <div style={{ display: 'flex', gap: '10px' }}>
                    <h1 className="h1fontChange"> Hi! I'm </h1>
                    <h1 className="h1fontChangeName"> Francis Vince Jaca</h1>
                    <h1 className="h1fontChange"> I love doing </h1>

                </div>
                <h1 className="h1fontChange"> Mobile & Software development.</h1>


                <br />

                <p className="pfontChange">
                    Are you familliar with the quote "Creating something out of nothing", because for me that's the definition of coding.
                    I want to build, learn, change, and connect with people, and for me to do that I need to work on myself as well.
                    I first started with hackathons, then moved up to web-development, and now currently I'm a mobile application developer.
                </p>
                <br />




                <HobbiesList />
            </div>

        </div>


    );
}    