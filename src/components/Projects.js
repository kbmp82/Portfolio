import React from "react";
import { projects } from "../data";

export default function Projects() {
  const split = (text) => {
    return text.split(",");
  };

  return (
    <section id="projects" className="text-gray-400 bg-lime-1 body-font">
      <div className="container px-5 pt-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mx-auto inline-block w-10 mb-4 text-lime-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lime-3">
            Below you'll discover a selection of projects I've been involved in
            throughout the years, showcasing a diverse range of real-world
            systems and simple websites that have played a vital role in honing
            my coding abilities.
          </p>
          <div className="flex justify-center mt-10">
            <a
              href="https://github.com/kbmp82"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-xs inline-flex text-lime-3 bg-lime-5 border-0 py-2 px-6 focus:outline-none hover:bg-lime-4 hover:text-white rounded text-lg"
            >
              See My Github
            </a>
          </div>
        </div>
        <div className="flex flex-wrap container">
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white mx-auto">
            Shopify Theme Customization & Development
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lime-3 mb-10">
            Over the past few years, I've found myself immersed in the realm of
            Shopify theme development, and it has become truly enjoyable. From
            making seamless customizations to existing themes to crafting brand
            new elements from the ground up, like a dynamic promotion scheduler
            tailored to specific business requirements, I eagerly embrace every
            challenge that comes my way.
          </p>
          {projects.shopify.map((project, index) => (
            <div key={index} className="sm:w-1/2 w-100 md:p-4 mt-10">
              <div className="skills-header">
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>
                {split(project.skills).map((skill) => (
                  <h2
                    key={skill}
                    className="text-xs uppercase text-lime-3 mb-1 rounded-full px-2 py-1 inline"
                  >
                    {skill}
                  </h2>
                ))}
              </div>
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex relative h-64 overflow-hidden">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded"
                    src={project.image}
                  />

                  <div className="px-8 h-full flex flex-col justify-center py-10 relative z-10 w-full border-4 rounded border-white bg-lime-2 opacity-0 hover:opacity-100">
                    <p className="leading-relaxed text-lime-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap container mt-20">
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white mx-auto">
            Other Web Developemnt Projects
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lime-3 mb-10">
            Over the past few years, I've found myself immersed in the realm of
            Shopify theme development, and it has become truly enjoyable. From
            making seamless customizations to existing themes to crafting brand
            new elements from the ground up, like a dynamic promotion scheduler
            tailored to specific business requirements, I eagerly embrace every
            challenge that comes my way.
          </p>
          {projects.others.map((project, index) => (
            <div key={index} className="sm:w-1/2 w-100 md:p-4 mt-10">
              <div className="skills-header">
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>
                {split(project.skills).map((skill) => (
                  <h2
                    key={skill}
                    className="text-xs uppercase text-lime-3 mb-1 rounded-full px-2 py-1 inline"
                  >
                    {skill}
                  </h2>
                ))}
              </div>
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex relative h-64">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded"
                    src={project.image}
                  />
                  <div className="px-8 h-full flex flex-col justify-center py-10 relative z-10 w-full border-4 rounded border-white bg-lime-2 opacity-0 hover:opacity-100">
                    <p className="leading-relaxed text-lime-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
