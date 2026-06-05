
import React from 'react'
import DisplayCertificate from './displaycertificate'

export default function ListCertificates() {
    return (
        <>
            <DisplayCertificate
                imgSrc={"./venture3.png"}
                alt={"Venture Excellence Award"}
                title={"Venture Excellence Award"}
                context={"Honored to receive this special recognition for our venture, DAPPL, at Central Philippine University. The award highlights our progress beyond initial ideation toward long-term scalability, institutional stability, and operational maturity within the startup ecosystem."}
                link={"https://www.facebook.com/photo?fbid=10215139301593310&set=pcb.10215139303753364"}
            />
            <DisplayCertificate
                imgSrc={"./wattwise2.png"}
                alt={"WattWise Grand Champion"}
                title={"Grand Champion - Renewable Energy Access and Financing"}
                context={"Awarded 1st Place and a PHP 30,000 cash prize at the energy hackathon for our AI-powered energy intelligence platform. The system leverages hybrid data models and contextual surveys to help Filipino households and MSMEs identify energy waste and lower their electricity bills."}
                link={"https://www.facebook.com/photo/?fbid=122292448394191122&set=a.122115839402191122"}
            />
            <DisplayCertificate
                imgSrc={"./AI cert.png"}
                alt={"AI Enablement Program Certification"}
                title={"AI Enablement Program Certification"}
                context={"A certificate for AI Enablement, earned during my internship at Callbox, Inc. This certificate is earned through the use of automation tools and AI software to create instruments that would help make work easy, such as duplication checker, content creation, scraper and data cleaning."}
                link={"https://www.linkedin.com/in/francis-vince-jaca-359532305/recent-activity/all/"}
            />
            <DisplayCertificate
                imgSrc={"./research.jpg"}
                alt={"cs50"}
                title={"2nd Place Advance Technologies Award "}
                context={"Receiving our 2nd place award in during the 20th CPU Student Research Symposium where our research project 'Deception Detector' got recognized for it's advance use of hybrid NLP and AI to unmask fake news in the Philippines.  "}
                link={"https://www.facebook.com/photo/?fbid=1019563250730411&set=a.199374552749289"}
            />

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
        </>
    )
}
