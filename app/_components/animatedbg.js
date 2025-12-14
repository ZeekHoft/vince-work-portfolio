import { Boxes } from "@/components/ui/shadcn-io/background-boxes/index"
import { BackgroundBeamsWithCollision } from "@/components/ui/shadcn-io/background-beams-with-collision";
import { TextAnimation } from "./animation";
import { PreassureText } from "./animation";

function AnimagedBoxes() {
    return (
        <div className="h-full">
            <Boxes className="" />
            <div className="">
                <h1>Hi</h1>
            </div>
        </div>
    );
}


export function AnimatedBeams() {
    return (
        <div >
            <BackgroundBeamsWithCollision>
                <h1 className="text-center font-bold uppercase outlined-text ">
                    <TextAnimation>
                        <span ><h1 className="h1fontChangeName pt-10"><PreassureText /></h1></span>

                    </TextAnimation>
                </h1>

            </BackgroundBeamsWithCollision>
        </div>
    );
}








export default AnimagedBoxes