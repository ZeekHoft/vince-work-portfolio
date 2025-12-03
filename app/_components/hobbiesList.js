
import { CgGym, CgSmartHomeCooker } from "react-icons/cg";
import { GiFrisbee, GiGamepadCross } from "react-icons/gi";
import { MdLocalMovies, MdOutlineTv } from "react-icons/md";
import { PiCookingPotDuotone } from "react-icons/pi";
import myLocalFont from './globalfont';




const HobbiesList = () => {
    const itemsWithIcons = [
        { key: 'hobby1', value: 'Gym', Icon: CgGym },
        { key: 'hobby2', value: 'Cooking', Icon: PiCookingPotDuotone },
        { key: 'hobby3', value: 'Frisbee', Icon: GiFrisbee },
        { key: 'hobby4', value: 'Horror movies', Icon: MdLocalMovies },
        { key: 'hobby5', value: 'Sit-coms', Icon: MdOutlineTv },
        { key: 'hobby6', value: 'Online Games', Icon: GiGamepadCross },

    ];
    return (
        <div className={`${myLocalFont.className}`}>

            <div className="tracking-wide">
                <h1 className="text-3xl"> Here are my
                    <span className="h1fontChangeName">  love hobbies </span>

                </h1>

            </div>
            <br />
            <div className="flex flex-col gap-2 pt-5 md: items-justify">

                {itemsWithIcons.map((item) => (
                    <div key={item.key} className="flex items-left gap-5 ">
                        <item.Icon className="text-6xl h1fontChangeName md: pb-5" />
                        <span className="text-xl">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default HobbiesList;








