import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaUser, FaCode } from 'react-icons/fa';
import { AiOutlineFileText } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";

const Socials = () => {
  return (
    <>
      <h1 className="text-center font-family-sans font-bold text-5xl text-blue-600">
        Connect with me on following platform
      </h1>
      <div className="grid mt-16 mb-16 grid-cols-2 gap-4 justify-items-center">
        {/* Instagram */}
        <div className="flex items-center justify-center mb-4">
          <a
            href="https://www.instagram.com/ajaysaxena_97/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-600" size={32} />
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-center mb-4">
          <a
            href="https://www.linkedin.com/in/ajay-saxena-880561272/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-600" size={32} />
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center justify-center mb-4">
          <a
            href="https://github.com/Ajaysaxena976"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-800" size={32} />
          </a>
        </div>
        {/* WhatsApp */}
        <div className="flex items-center justify-center mb-4">
          <a
            href="http://wa.me/+917248681577"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-green-600" size={32} />
          </a>
        </div>

        {/* Gmail */}

        <div className="flex items-center justify-center mb-4">
          <br />

          <a
            href="mailto:ajaysa9760@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-red-600" size={32} />
          </a>
        </div>

        {/* LeetCode */}
        <div className="flex items-center justify-center mb-4">
          <a
            href="https://leetcode.com/u/ajaysaxena_97/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="text-orange-500" size={32} />
          </a>
        </div>

        {/* GeeksforGeeks */}
        <div className="flex items-center justify-center mb-4">
          <a
            href="https://www.geeksforgeeks.org/user/ajaysaxena_97/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGeeksforgeeks className="text-purple-600" size={32} />
          </a>
        </div>

        {/* CodingNinjas */}
        <div className="flex items-center justify-center mb-4">
          <a
            href="https://www.naukri.com/code360/profile/Ajaysaxena_97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodingninjas className="text-indigo-600" size={32} />
          </a>
        </div>

        {/* Additional Icons to fill the grid */}
      </div>
    </>
  );
};

export default Socials;