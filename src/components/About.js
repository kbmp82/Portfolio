import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-5 pt-20 md:pb-20 md:flex-row flex-col items-center">
        <div className="order-2 lg:flex-grow md:order-1 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Kevin.
            <br className="hidden lg:inline-block" /> I have a passion for
            ecommerce and all things web development.
          </h1>
          <p className="mb-8 leading-relaxed">
            As a web developer with an entrepreneurial spirit and a background
            in e-commerce marketing, I understand conversion-centered and
            responsive web design. I thrive on collaborating with team members
            to enhance the usability and functionality of websites while
            constantly seeking solutions to improve user experience.
          </p>
          <div className="flex justify-start gap-4 w-full flex-wrap md:flex-nowrap">
            <a
              href="#contact"
              className="text-white bg-lime-2 border-0 py-2 px-6 focus:outline-none hover:bg-lime-6 rounded text-lg w-full md:w-auto"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="text-lime-3 bg-lime-5 border-0 py-2 px-6 focus:outline-none hover:bg-lime-4 hover:text-white rounded text-lg w-full md:w-auto"
            >
              See My Portfolio
            </a>
            <a
              href="https://www.dropbox.com/scl/fi/6bhq4nbgjhzr4unp6za8y/Kevin-Brown-Resume.pdf?rlkey=l85537eogz3bqdvtaxghhehv9&st=mkntrrsz&dl=1"
              taget="_blank"
              rel="noopener noreferrer"
              className="text-lime-5 bg-lime-3 border-0 py-2 px-6 focus:outline-none hover:bg-lime-4 hover:text-white rounded text-lg w-full md:w-auto"
            >
              View My Resume
            </a>
          </div>
        </div>
        <div className="md:order-2 md:mb-0 lg:max-w-lg lg:w-full md:w-1/2 w-full order-1 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./profile.jpg"
          />
        </div>
      </div>
    </section>
  );
}
