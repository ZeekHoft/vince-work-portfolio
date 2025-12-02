
import { CgGym, CgSmartHomeCooker } from "react-icons/cg";
import { GiFrisbee, GiGamepadCross } from "react-icons/gi";
import { MdLocalMovies, MdOutlineTv } from "react-icons/md";
import { PiCookingPotDuotone } from "react-icons/pi";




const HobbiesList = () => {
    const itemsWithIcons = [
        { key: 'hobby1', value: 'Gym', Icon: CgGym },
        { key: 'hobby2', value: 'Cooking', Icon: PiCookingPotDuotone },
        { key: 'hobby3', value: 'Frisbee', Icon: GiFrisbee },
        { key: 'hobby4', value: 'Watching horror movies', Icon: MdLocalMovies },
        { key: 'hobby5', value: 'Bingine Sitcoms', Icon: MdOutlineTv },
        { key: 'hobby6', value: 'Watching play-throughs', Icon: GiGamepadCross },

    ];
    return (
        <div  >

            <div className="tracking-wide">
                <h1 className="h1fontChange"> Here a little bit of what
                    <span className="h1fontChangeName"> I love </span>
                    <span className="h1fontChange">to do other than coding</span>

                </h1>

            </div>
            <br />
            {itemsWithIcons.map((item) => (
                <div key={item.key} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <item.Icon className="iconSize" />
                    <span className="pfontChange h1fontChangeName">{item.value}</span>
                </div>
            ))}

        </div>

    );
};

export default HobbiesList;








