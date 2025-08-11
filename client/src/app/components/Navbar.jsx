// event handelers cannot be passed to the server side
"use client";
import { Menu, Search, Sun } from "lucide-react";
import React from "react";
import PlaceholdersAndVanishInput from "./ui/Placeholders-and-vanish-input";

const Navbar = () => {

  const placeholders = [
    "Type to Search Features",
    "Inentory",
    "News",
    "Community",
    "Donate",
  ];

  const handleChange = () => {
    console.log(e.target.value);
  };
  const onSubmit = () => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="flex justify-between items-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <div className="relative">
          {/* <input
            type="search"
            placeholder="Type to Search Features"
            className="pl-10 pr-4 py-2 w-50 md:w-80 bg-zinc-950 rounded-lg focus:outline-none"
          /> */}
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
