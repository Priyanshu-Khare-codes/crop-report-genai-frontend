'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick  = () => {
    router.push("/report");
  };

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-16 gap-12 bg-gradient-to-br from-green-50 to-green-100 min-h-[90vh]">
      
      {/* Left Side Text */}
      <div className="flex flex-col gap-6 text-center lg:text-left max-w-2xl animate-fadeInUp">
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-josefin font-extrabold text-green-700 leading-tight">
          Agro To Vision
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-mono text-green-800">
          Empowering Agriculture through AI
        </h2>

        <p className="text-lg md:text-xl text-gray-700 mt-2 font-mono">
          An AI-powered solution crafted for farmers to revolutionize crop management and yield optimization.
        </p>

        <div className="mt-8 flex justify-center lg:justify-start">
          <button onClick={handleClick} className="px-10 py-4 bg-green-600 hover:bg-green-700 active:bg-green-800 transition-all rounded-full font-semibold text-white text-lg shadow-lg hover:shadow-xl animate-bounce-slow">
            🌾 Try Now!
          </button>
        </div>

      </div>

      {/* Right Side Image */}
      <div className="relative w-full max-w-md animate-fadeIn">
        <Image
          src="/agricultureheroimg.svg"
          alt="Hero illustration"
          width={600}
          height={600}
          className="w-full h-auto object-contain drop-shadow-lg"
          priority
        />
      </div>

    </section>
  );
}
