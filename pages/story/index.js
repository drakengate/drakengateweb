import Image from "next/image";
import { Young_Serif, Tangerine } from "next/font/google";
import Link from "next/link";
import { BsTelegram } from "react-icons/bs";

const young = Young_Serif({ weight: "400", subsets: ["latin"] });
const tangerine = Tangerine({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center bg-black md:h-screen  justify-between tracking-widest `}
    >
      <div className="flex flex-row  justify-center md:justify-between w-full">
      <div className="text-white flex justify-center p-4  md:p-12 text-3xl cursor-pointer  ">
          <Link className="md:pl-24" passHref={true} href="https://presale.drakengate.com">BUY</Link>
          
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Image src="/logodragontwo.png" width={180} height={180} />
          <p className="text-3xl text-white uppercase"> <Link href="/">Drakengate </Link></p>
        </div>
        <div className="text-white flex justify-center p-4  md:p-12 text-3xl cursor-pointer  ">
         
          <Link className="md:pr-24 uppercase" passHref={true} href="/story">read</Link>
        </div>
      </div>

      <div
        id="#home"
        className=" px-20 flex flex-col text-xl text-center    items-center w-screen h-full  bg-cover bg-center "
      >
        <div className="flex">
          
          <p className="text-5xl text-white"></p>
        </div>
        <div className="flex justify-center mt-12 flex-col items-center">
          <p className="text-3xl text-white  uppercase ">Join Now</p>

          <Link href="https://t.me/drakengate">
            <BsTelegram
              className="text-white  mt-2  cursor-pointer"
              size={40}
            ></BsTelegram>
          </Link>
          <audio controls className="mt-8">
            <source src="Story.mp3" type="audio/mpeg" />
          </audio>
          <div className={young.className}>
          <p className="text-white text-center my-12  tracking-wide text-lg">
            Shadows of Drakensberg: 2042 In 2042, at the foothills of the
            Drakensberg Mountains, a young being named Z Ω B-21 lived in an
            ancient cave. This cave was filled with secrets from beyond time. Z
            Ω B-21 had a natural ability to communicate with dragons and aliens,
            but this gift also brought a heavy responsibility. One day, a
            mysterious light shone in the sky, and a spaceship named Zephyr
            landed on the peak of Drakensberg. The aliens had heard of Z Ω
            B-21's special ability and wanted to make a deal with him. Zephyr's
            captain, Lira, told Z Ω B-21 that they needed his skills to maintain
            the balance of the universe. That night, with a tremor coming from
            the depths of the mountain, a massive dragon named Ignis came to Z Ω
            B-21's cave. Ignis was aware of the aliens' presence and was
            suspicious of their intentions. Z Ω B-21 tried to explain Zephyr's
            peaceful intentions to Ignis, but the dragon was not convinced. Z Ω
            B-21 decided to mediate between Zephyr and Ignis. However, this
            wouldn't be easy for him. Lira told Z Ω B-21 about a growing dark
            force in the universe. This dark force threatened both the worlds of
            dragons and aliens. Z Ω B-21 had to use the ancient secrets of
            Drakensberg to form a line of defense against this dark force. But
            discovering these secrets would challenge him both physically and
            spiritually. As time went on, Z Ω B-21, Lira, and Ignis began
            working together to form a united front against the dark force.
            However, this alliance would lead them on an adventure filled with
            dangers, betrayals, and surprises. Together, they decided to
            collaborate to extract a vast natural bounty hidden deep within
            Drakensberg. This bounty was of critical importance to protect the
            world from the dark-hearted evildoers. However, they needed truly
            trustworthy allies to assist them in this mission. Therefore, Z Ω
            B-21, Lira, and Ignis embarked on a quest to find genuine friends to
            join them in this sacred task. Drakensberg was no longer just a
            mountain; it had become the center of their fate, and their success
            in this mission was vital for the entire world.
          </p></div>
        </div>
      </div>
    </main>
  );
}
