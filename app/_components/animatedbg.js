import { Boxes } from "@/components/ui/shadcn-io/background-boxes/index"
import { BackgroundBeamsWithCollision } from "@/components/ui/shadcn-io/background-beams-with-collision";
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
                <h1 className="md:text-9xl relative z-20 text-6xl text-center h1fontChangeName font-bold">
                    Francis Vince Jaca
                </h1>
            </BackgroundBeamsWithCollision>
        </div>
    );
}

export default AnimagedBoxes