import Image from "next/image";
import { Young_Serif, Tangerine } from "next/font/google";
import Link from "next/link";
import { BsTelegram } from "react-icons/bs";

const young = Young_Serif({ weight: "400", subsets: ["latin"] });
const tangerine = Tangerine({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center bg-transparent justify-between uppercase tracking-widest `}
    >
      <div className="flex md:flex-row   justify-center md:justify-between w-full">
       
        <div className="text-white flex justify-center p-4  md:p-12 text-3xl cursor-pointer  ">
          <Link className="md:pl-24" passHref={true} href="https://presale.drakengate.com">BUY</Link>
          
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Image src="/logodragontwo.png" width={180} height={180} />
          <p className="text-3xl text-white"> Drakengate </p>
        </div>
        <div className="text-white flex justify-center p-4  md:p-12 text-3xl cursor-pointer  ">
         
          <Link className="md:pr-24" passHref={true} href="/story">read</Link>
        </div>
      </div>

      <div
        id="#home"
        className=" px-20 flex flex-col text-xl text-center    items-center w-screen h-full  bg-cover bg-center "
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
        
        <Link href="https://t.me/drakengate" >
          <BsTelegram
            className="text-white  mt-2  cursor-pointer"
            size={40}
          ></BsTelegram>
        </Link>
        <audio controls className="mt-8">
          <source src="Story.mp3" type="audio/mpeg"/>
        </audio>
        <p className="text-white mt-12">Total Supply: 204,242,424,242,424</p>
        <p className="text-white mt-8">Launch Date: Community will decide</p>
        <div className="text-white text-2xl mt-8">
          <Link className="underline" target="_blank" href="https://forms.gle/NPiS15wcCzedhbPT9">Join our Team</Link>
        </div>
        </div>
      </div>
    </main>
  );
}
