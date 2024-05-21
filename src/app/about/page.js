import React from "react";
const companyName = "Charlee";

export default function about() {
  return (
    <div className='bg-white'>
      <div className='container mx-auto p-4 text-black bg-white'>
        <h2 className='text-xl font-bold mb-4'>About {companyName}.io</h2>
        <p className='w-full md:w-4/6 mb-4'>
          I am a developer for the past 25+ years and wanted to build domain /
          website for my youngest daughter, so I got {companyName}.io. More to
          come as {companyName} is not here yet, and will be born in the summer
          of 2024.
          <br />
          To check out more of my work visit{" "}
          <a
            href='https://jasonleewilson.com/'
            target='_blank'
            className='text-red-500 hover:underline'
          >
            jasonleewilson.com
          </a>
        </p>
      </div>
    </div>
  );
}
