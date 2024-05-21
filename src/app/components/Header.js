"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      {/* <!-- Main navigation container --> */}
      <div className='navbar bg-white text-black'>
        <div className='flex-1'>
          <Link href='/' className='btn btn-ghost text-xl'>
            Charlee.io
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            {/* <li>
              <details>
                <summary>Parent</summary>
                <ul className='p-2 bg-white rounded-t-none'>
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
