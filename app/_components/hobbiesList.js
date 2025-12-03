
import { CgGym, CgSmartHomeCooker } from "react-icons/cg";
import { GiFrisbee, GiGamepadCross } from "react-icons/gi";
import { MdLocalMovies, MdOutlineTv } from "react-icons/md";
import { PiCookingPotDuotone } from "react-icons/pi";
import GetFont from '../_components/myFonts';




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
        <div className={`${GetFont.className}`}>

            <div className="tracking-wide">
                <h1 className="text-3xl"> Here a little bit of what I
                    <span className="h1fontChangeName">  love </span>
                    <span className="text-3xl">to do other than coding</span>

                </h1>

            </div>
            <br />
            {itemsWithIcons.map((item) => (
                <div key={item.key} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <item.Icon className="iconSize h1fontChangeName " />
                    <span className="text-xl">{item.value}</span>
                </div>
            ))}

        </div>

    );
};

export default HobbiesList;








