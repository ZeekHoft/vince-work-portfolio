


import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import { FaPencilRuler, FaUsers } from "react-icons/fa";
import { FaDatabase, FaServer } from "react-icons/fa";
import myLocalFont from './globalfont';
import Animation from "./animation";

const ServicesList = [
    { key: 'service1', value: 'Mobile App Development', Icon: FaMobileAlt, description: 'Building high-performance native and cross-platform mobile applications.' },
    { key: 'service2', value: 'Web Software Development', Icon: FaLaptopCode, description: 'Creating robust, scalable full-stack web applications using modern frameworks.' },
    { key: 'service3', value: 'UX/UI Design & Prototyping', Icon: FaPencilRuler, description: 'Designing intuitive user interfaces and user-centered experiences.' },
    { key: 'service4', value: 'Database Management', Icon: FaDatabase, description: 'Efficient setup, migration, and maintenance of database systems.' },
    { key: 'service5', value: 'Technical Consulting', Icon: FaUsers, description: 'Providing expert guidance on technology stack and project architecture.' },
    { key: 'service6', value: 'API & Backend Services', Icon: FaServer, description: 'Implementing secure non-sql servers & API hosting set-up.' },
];

const Services = () => {
    const column1Items = ServicesList.slice(0, 3);
    const column2Items = ServicesList.slice(3, 6);

    const ServiceItem = ({ item }) => (
        <div key={item.key} className="flex items-start gap-4 p-4 border-b border-gray-700 last:border-b-0">
            <item.Icon className="text-4xl text-orange-400 mt-1 flex-shrink-0" />
            <div>
                <h3 className="text-xl  ">{item.value}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
            </div>
        </div>
    );

    return (

        <div>
            <div className={`p-4 md:p-10  ${myLocalFont.className}`}>
                <div className="tracking-wide text-center mb-10">
                    <h1 className="h1fontChangeName text-5xl uppercase inline-block border-b-4 border-orange-500 pb-2">
                        Services


                    </h1>
                </div>

                <div className="flex flex-col md:flex-row md:gap-10 max-w-6xl mx-auto">

                    <div className="w-full md:w-1/2 mb-8 md:mb-0 containerColor rounded-lg shadow-xl overflow-hidden">
                        {column1Items.map((item) => <ServiceItem key={item.key} item={item} />)}
                    </div>

                    <div className="w-full md:w-1/2 containerColor rounded-lg shadow-xl overflow-hidden">
                        {column2Items.map((item) => <ServiceItem key={item.key} item={item} />)}
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Services;