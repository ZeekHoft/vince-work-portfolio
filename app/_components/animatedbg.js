import { Boxes } from "@/components/ui/shadcn-io/background-boxes/index"
import { BackgroundBeamsWithCollision } from "@/components/ui/shadcn-io/background-beams-with-collision";
import { TextAnimation } from "./animation";
import { TextSplit } from "./animation";
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
                <TextAnimation>
                    {/* <span ><h1 className="h1fontChangeName pt-10"><PreassureText /></h1></span> */}
                    <div className="h1fontChangeName">

                        <h1 className=" text-center font-bold uppercase outlined-text  text-4xl md:text-left md:text-9xl ">
                            <TextSplit
                                text="Francis Vince Jaca"
                                type={"chars"}
                            />
                        </h1>
                        <span>
                            <h3 className=" text-center uppercase text-2xl  md:text-left md:text-5xl">
                                <TextSplit
                                    text="Software/ Web/Game/ Mobile developer"
                                    type={"words"}
                                    delay={2200} />

                            </h3>
                        </span>
                    </div>



                </TextAnimation>

            </BackgroundBeamsWithCollision>
        </div>
    );
}









export default AnimagedBoxes