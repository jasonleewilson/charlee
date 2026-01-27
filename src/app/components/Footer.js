import React from "react";
const companyName = "Charlee";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-white text-center lg:text-left">
        <div className="p-4 text-center text-black text-surface">
          © {currentYear} Copyright{" "}
          <a href="#">{companyName}.io</a>
        </div>
      </footer>
    </div>
  );
}

