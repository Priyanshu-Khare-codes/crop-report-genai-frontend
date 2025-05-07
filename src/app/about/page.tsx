import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col items-center px-6 md:px-16 py-16 gap-16 bg-gradient-to-br from-green-50 to-green-100 min-h-[100vh]">
      
      {/* Header Section */}
      <div className="text-center max-w-4xl animate-fadeInUp">
        <h1 className="text-5xl md:text-6xl font-josefin font-extrabold text-green-700 leading-tight">
          About Agro2Pro
        </h1>
        <p className="text-xl md:text-2xl font-mono text-green-800 mt-4">
          Empowering Farmers Through AI and Emerging Technologies
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 animate-fadeInUp max-w-6xl">
        
        {/* Image */}
        <div className="w-full max-w-md">
          <Image
            src="agricultureaboutimg.svg" 
            alt="Agro2Pro AI Vision"
            width={600}
            height={600}
            className="w-full h-auto object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left max-w-xl">
          <p className="text-lg md:text-xl font-mono text-gray-800">
            Agro2Pro is a revolutionary platform designed to <span className="font-bold text-green-700">empower farmers</span> with the latest in software and AI technologies.
          </p>
          <p className="text-lg md:text-xl font-mono text-gray-800">
            We integrate cutting-edge techniques including <span className="text-green-700 font-semibold">Machine Learning</span>, <span className="text-green-700 font-semibold">Deep Learning</span>, and <span className="text-green-700 font-semibold">Generative AI</span> into the agricultural ecosystem.
          </p>
          <p className="text-lg md:text-xl font-mono text-gray-800">
            Our first step toward smart farming is a powerful AI-driven image diagnosis tool. 📸
            Users can simply upload an image of a diseased or defective crop, and our system provides a detailed report — fast, accurate, and farmer-friendly.
          </p>
          <p className="text-lg md:text-xl font-mono text-green-900">
            We&apos;re bridging the gap between traditional farming and future technology. 🌾🤖
          </p>
        </div>

      </div>
    </section>
  );
}
