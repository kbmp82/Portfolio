import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container md:px-5 py-10 mx-auto text-center w-full">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Recent Performance Review
        </h1>
        <div className="flex flex-wrap ">
            <div className="p-4 w-full max-w-2xl mx-auto">
              <div className="h-full bg-lime-2 bg-opacity-40 p-8 rounded">
                <TerminalIcon fill='#FFFFFF' className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonials[0].quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonials[0].image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonials[0].name}
                    </span>
                    <span className="text-white text-sm uppercase">
                      {testimonials[0].company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}