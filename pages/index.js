import Image from "next/image";
import { Young_Serif, Tangerine } from "next/font/google";
import Link from "next/link";
import { BsTelegram } from "react-icons/bs";

const young = Young_Serif({ weight: "400", subsets: ["latin"] });
const tangerine = Tangerine({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center justify-between  ${young.className}`}
    >
      <div className="flex md:flex-row  flex-col justify-center md:justify-between w-full">
       
        <div className="text-white flex  p-12 text-3xl cursor-pointer  ">
          <Link href="presale.drakengate.com">BUY</Link>
        </div>
        <div className="flex flex-col items-center ">
          <Image src="/logodragontwo.png" width={180} height={180} />
          <p className="text-3xl text-white"> Drakengate </p>
        </div>
        <div className="w-[160px]"></div>
      </div>

      <div
        id="#home"
        className=" px-20 flex flex-col text-xl text-center    items-center w-screen  bg-cover bg-center "
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
          <p className="text-5xl text-white"></p>
        </div>
        <div className="flex justify-center mt-12 flex-col items-center">
        <p className="text-3xl text-white  ">
          Join Now
        </p>
        <Link href="https://t.me/+8U_Hplv3IoQ0NmU0" >
          <BsTelegram
            className="text-white  mt-2  cursor-pointer"
            size={40}
          ></BsTelegram>
        </Link></div>
      </div>
    </main>
  );
}
