import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-lime-2 md:sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Kevin Brown
          </a>
        </a>
        <nav className="md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-lime-3 justify-center gap-4">
          <a href="#projects" className="hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="hover:text-white">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-lime-5 border-0 py-1 px-3 focus:outline-none hover:bg-lime-4 rounded text-lime-3 mt-4 md:ml-auto md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}