import Image from "next/image";
import Services from "./_components/service";
export default function Home() {
  return (
    <div>
      <div class="flex flex-col bg-white w-full h-full ">
        {/* <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1> */}

      </div>

      <div className='pt-20 md:pt-5'>
        <Services />
      </div>
    </div>
  );
}
