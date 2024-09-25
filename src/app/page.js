import Image from "next/image";
// import profilePic from "../app/";
export const runtime = "edge";
import "animate.css";
const companyName = "Charlee";

export default function Home() {
  return (
    <main className='grid place-items-center'>
      <div className='hero bg-pink grid place-items-center bg-[url("/images/charlee1.jpg")]'>
        <div className='text-center md:py-64'>
          <Image
            src='./bunny.svg'
            alt='profile'
            width='0'
            height='0'
            sizes='100vw'
            className='pt-8 inline-block w-40 animate__animated animate__bounce animate__infinite'
            priority={true}
            style={{ objectFit: "contain" }}
          />
          <h1 className='text-8xl text-white mt-4'>{companyName}.io</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
        <div className='bg-white text-black px-16 py-12 text-left flex items-center justify-center h-full'>
          <div>
            <h2 className='text-xl font-bold uppercase'>
              {companyName} IS THE BEST
            </h2>
            <p>
              Hi! I&apos;m {companyName} arrived the summer of 2024! My dad
              built this site specially for me so I will always have my own
              domain name! I can&apos;t wait to meet everyone!
            </p>
          </div>
        </div>
        <div className='bg-blue-300 flex items-center justify-center h-full'>
          <Image
            src='/images/egg.webp'
            alt='egg'
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-fit'
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div className='bg-blue-300 flex items-center justify-center h-full order-2 md:order-1'>
          <Image
            src='/images/peach.webp'
            alt='peach'
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-fit'
          />
        </div>
        <div className='bg-white text-black px-16 py-12 text-left flex items-center justify-center h-full order-1 md:order-2'>
          <div>
            <h2 className='text-xl font-bold uppercase'>
              {companyName} WE FINALLY GET TO MEET HER
            </h2>
            <p>
              The future with {companyName} is here, she is shocking the world
              and is such a perfect little angel. More to come...
            </p>
          </div>
        </div>
        <div className='bg-blue-300 flex items-center justify-center bg-cover order-1 md:order-2'>
          <Image
            src='/images/cherry.webp'
            alt='cherry'
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-full'
          />
        </div>
        <div className='bg-blue-300 flex items-center justify-center bg-cover order-3 md:order-2'>
          <Image
            src='/images/lemon.webp'
            alt='lemon'
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-full bg-cover'
          />
        </div>
        {/* <div className='relative'>
          <Image
            layout='fill'
            className='object-center object-cover pointer-events-none'
            src='/images/cherry.webp'
            alt='TITLE HERE'
          />
          <div className='relative z-1'>my content</div>
        </div> */}
      </div>
    </main>
  );
}
