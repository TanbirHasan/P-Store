import React from "react";

export default function PortfolioNavbar() {
  return (
    <header className="bg-blue-400">
      <div className="flex w-5/6 justify-between mx-auto py-5 items-center">
        <div>
          <h2 className="font-bold text-3xl">Logo</h2>
        </div>
        <div>
          <ul className="flex gap-5">
            <li className="font-semibold cursor-pointer hover:text-white">Home</li>
            <li className="font-semibold cursor-pointer hover:text-white">About</li>
            <li className="font-semibold cursor-pointer hover:text-white">Skill</li>
            <li className="font-semibold cursor-pointer hover:text-white">Education</li>
            <li className="font-semibold cursor-pointer hover:text-white">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
