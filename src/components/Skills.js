import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A list of the different toolkits, skills, platforms, and technologies I have used over the years either in practice to gain familiarity or in a production environment.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 md:w-1/3 lg:w-1/4 w-full">
              <div className="bg-lime-5 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-lime-1 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-lime-3">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}