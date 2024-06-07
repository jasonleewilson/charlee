import React from "react";
const companyName = "Charlee";

export default function about() {
  return (
    <div className='bg-white'>
      <div className='container mx-auto p-4 text-black bg-white'>
        <h2 className='text-xl font-bold mb-4'>About {companyName}.io</h2>
        <p className='w-full md:w-4/6 mb-4'>
          About my dad, Jason Lee Wilson! He&apos;s been a developer for the
          past 25+ years and wanted to build something fun for when I arrive! My
          big sister{" "}
          <a
            href='https://kayelee.com/'
            target='_blank'
            className='text-red-500 hover:underline'
          >
            Kayelee.com
          </a>{" "}
          tells people to visit{" "}
          <a
            href='https://charlee.io/'
            target='_self'
            className='text-red-500 hover:underline'
          >
            Charlee.io
          </a>{" "}
          to stay updated as I get closer! I heard summers are great, so
          I&apos;m looking forward to my first one! To check out more of my
          father&apos;s work, visit{" "}
          <a
            href='https://jasonleewilson.com/'
            target='_blank'
            className='text-red-500 hover:underline'
          >
            jasonleewilson.com
          </a>{" "}
          he&apos;s done some pretty awesome stuff from what I overheard in this
          little belly I&apos;m in of my mom! She&apos;s so excited too! See you
          soon! Xo!
          <br />
          <br />~ {companyName}
        </p>
      </div>
    </div>
  );
}
