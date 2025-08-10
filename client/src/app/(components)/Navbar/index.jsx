// event handelers cannot be passed to the server side
"use client";
import {Menu, Search, Sun } from 'lucide-react';
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* left */}
      <div className="flex justify-between items-center gap-5">
        <button
          className=" flex md:hidden px-3 py-3 bg-zinc-950 rounded-full hover:bg-zinc-200 hover:text-zinc-950"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Type to Search Features"
            className="pl-10 pr-4 py-2 w-50 md:w-80 bg-zinc-950 rounded-lg focus:outline-none"
          />
          <div className="absolute inset-y-0 left-0 pl-3 py-2 items-center pointer pointer-events-none">
            <Search
              className="text-zinc-300 flex justify-between items-center"
              size={16}
            />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5 py-2">
          <div className="flex justify-between items-center">
            <button onClick={() => {}}>
              <Sun className="cursor-pointer text-zinc-200" />
            </button>
          </div>
          <div className="flex justify-between items-center cursor-pointer bg-zinc-300 rounded-full w-7 h-7"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar