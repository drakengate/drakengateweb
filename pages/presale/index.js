import Image from "next/image";
import { Young_Serif , Tangerine } from "next/font/google";
import {BsTelegram} from "react-icons/bs"
import Link from "next/link";

const young = Young_Serif({ weight: "400", subsets: ["latin"] });
const tangerine = Tangerine({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${young.className}`}
    >
     
      <div className="flex flex-col items-center ">
        <Image src="/logodragontwo.png" width={180} height={180} />
        <p className="text-3xl text-white"> Drakengate </p>
      </div>

      <div
        id="#home"
        className=" px-20 flex flex-col text-xl text-center mt-[-220px]   items-center w-screen h-screen bg-cover bg-center "
      >
        <div className="flex">
          <video
            className="w-full h-full absolute top-0 left-0 object-cover -z-10"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src="/HELPPP-2.mp4"></source>
          </video>
         
        </div>
        <p className="text-5xl text-white absolute mt-[300px]">Coming Soon</p>
        <p className="text-3xl text-white absolute mt-[360px]">The community will decide to reveal presale </p>
        <p className="text-3xl text-white absolute mt-[500px] md:mt-[400px]">Join Now</p>
        <Link href="https://t.me/+8U_Hplv3IoQ0NmU0" className="mr-8">
        <BsTelegram className="text-white absolute mt-[550px] md:mt-[450px] cursor-pointer" size={40}></BsTelegram>
        </Link>
        
      </div>
    </main>
  );
}
