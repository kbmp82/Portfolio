import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [message, setMessage] = useState();
  const form = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kgdenyi",
        "template_d2zxewu",
        form.current,
        "aZ2dMW2R8KcDaHxLM"
      )
      .then(
        (result) => {
          setMessage("Your message has been sent!");
          e.target.reset();
          setTimeout(()=>{
            setMessage("");
          },2000);
         
        },
        (error) => {
          setMessage(error.text);
        }
      );
  }
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative w-full">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 w-full"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106257.06711142576!2d-112.4549819!3d33.66925145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b50449c4f72a3%3A0x3d108204ce52db2!2sSurprise%2C%20AZ!5e0!3m2!1sen!2sus!4v1687990040171!5m2!1sen!2sus"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Location
              </h2>
              <p className="mt-1">Surprise, AZ USA</p>
            </div>
          </div>
        </div>
        <div className="relative lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <form
            ref={form}
            name="contact"
            onSubmit={handleSubmit}
           
          >
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Contact Me
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="flex gap-5 items-center">
            <button
              type="submit"
              className="text-lime-3 bg-lime-5 border-0 py-2 px-6 focus:outline-none hover:bg-lime-4 rounded text-lg"
            >
              Submit
            </button>
            <div className="text-white">{message}</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
