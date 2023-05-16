import React from "react";
import PortfolioNavbar from "./PortfolioNavbar";
import PortfolioSkills from "./PortfolioSkills";

export default function PortfolioHome() {
  return (
    <>
    <PortfolioNavbar/>
     <div className="flex gap-5 w-5/6 mx-auto mt-20">
      <div className="p-5">
        {/* Here name , designation will be dynamic */}
        <h4>Hello</h4>
        <h2 className="text-3xl">I'm Mark Andrew</h2>
        <h3 className="text-xl">A passionate {}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div>
        {/* The image will be dynamic */}
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80" />
      </div>
    </div>
    <div>
      <PortfolioSkills/>
    </div>
    </>
   
  );
}
