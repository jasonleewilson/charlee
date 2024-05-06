import Image from "next/image";
export const runtime = "edge";
import "animate.css";

export default function Home() {
  return (
    <main className='grid h-screen place-items-center'>
      <div className='text-center'>
        <Image
          src='./bunny.svg'
          alt='profile'
          width='0'
          height='0'
          sizes='100vw'
          className='inline-block w-40 h-40 animate__animated animate__bounce animate__infinite'
          priority={true}
        />
        <h1>charlee.io</h1>
      </div>
    </main>
  );
}
