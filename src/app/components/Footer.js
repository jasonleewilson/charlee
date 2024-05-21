import React from "react";
const companyName = "Charlee";

export default function Footer() {
  return (
    <div>
      <footer className='bg-white text-center lg:text-left'>
        <div className='p-4 text-center text-black text-surface'>
          © 2024 Copyright <a href='#'>{companyName}.io</a>
        </div>
      </footer>
    </div>
  );
}
