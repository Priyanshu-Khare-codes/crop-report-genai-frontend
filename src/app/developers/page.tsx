import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const developers = [
  {
    name: 'Priyanshu Khare',
    role: 'Lead Developer',
    github: 'https://github.com/Priyanshu-Khare-codes',
    linkedin: 'https://www.linkedin.com/in/priyanshu-khare-b776a630a/',
    image: 'priyanshu.jpeg',
  },
  {
    name: 'Anurag Jaiswal',
    role: 'Backend Developer',
    github: 'https://github.com/AnuragAJ25',
    linkedin: 'https://www.linkedin.com/in/anurag-jaiswal-ab6074294/',
    image: 'anurag.jpeg',
  },
  {
    name: 'Pratham Mishra',
    role: 'AI Specialist',
    github: 'https://github.com/Pratham040106',
    linkedin: 'https://www.linkedin.com/in/pratham-mishra-202684337/',
    image: 'pratham.jpg',
  },
];

const Developers = () => {
  return (
    <section className="flex flex-col items-center px-6 md:px-16 py-16 gap-16 bg-gradient-to-br from-green-50 to-green-100 min-h-[100vh]">
      
      {/* Heading & Text */}
      <div className="text-center max-w-4xl animate-fadeInUp">
        <h1 className="text-5xl md:text-6xl font-josefin font-extrabold text-green-700 leading-tight">
          Meet the Developers
        </h1>
        <h2 className="text-2xl md:text-3xl font-mono text-green-800 mt-2">
          The team behind AgroPro, revolutionizing agriculture with AI.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mt-4 font-mono">
          Our developers are experts in AI and agriculture, building the future of farming.
        </p>
        <div className="mt-8 flex justify-center">
          <button className="px-10 py-4 bg-green-600 hover:bg-green-700 active:bg-green-800 transition-all rounded-full font-semibold text-white text-lg shadow-lg hover:shadow-xl animate-bounce-slow">
            Join Our Team!
          </button>
        </div>
      </div>

      {/* Developer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {developers.map((dev, idx) => (
          <div
            key={idx}
            className="bg-white text-green-700 rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-green-400 animate-fadeIn"
          >
            <div className="relative">
              <Image
                src={dev.image}
                alt={dev.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-900">{dev.name}</h2>
              <p className="text-lg text-gray-700">{dev.role}</p>
              <div className="mt-4 flex justify-center gap-6">
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-green-600 transition-all transform hover:scale-110"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-blue-600 transition-all transform hover:scale-110"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Developers;

