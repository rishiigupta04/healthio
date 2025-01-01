import React from "react";
import { assets } from "../assets/assets";
import { Github, Linkedin, Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <img className="mb-5 w-10" src="/favicon.svg" alt="" />
            <h1 className="mb-3 text-2xl font-bold  tracking-normal cursor-pointer">
              Healthio
            </h1>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 96198 34007</li>
            <li>grishi349@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t-[1px]  mt-12 flex justify-between">
        <hr />
        <p className="py-5 text-sm text-center">Made with 💙 by Rishi.</p>
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/rishiigupta04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-accent hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/rishi-raj-gupta45/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-accent hover:text-primary transition-colors" />
          </a>
          <a
            href="https://rishiraj-gupta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Briefcase className="w-6 h-6 text-accent hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
