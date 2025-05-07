// components/ImageForm.tsx
"use client";

import { useState } from "react";

interface Props {
  onSubmitImage: (image: File) => void;
  isSubmitting: boolean;
}

const ImageForm = ({ onSubmitImage, isSubmitting }: Props) => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return alert("Please select an image first.");
    onSubmitImage(image);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 transition-all duration-500 ${
        isSubmitting ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <h2 className="text-3xl font-josefin font-bold text-green-700 text-center">
        Upload Image for Analysis
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        disabled={isSubmitting}
        className="file:bg-green-600 file:text-white file:rounded-full file:px-4 file:py-2 file:border-0 file:mr-4 text-gray-700 font-mono cursor-pointer"
      />

      {image && (
        <p className="text-gray-800 font-mono text-center">
          Selected: <span className="font-semibold">{image.name}</span>
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-green-600 hover:bg-green-700 text-white font-bold font-mono py-3 px-6 rounded-full transition-all shadow-md hover:shadow-lg"
      >
        🔍 Analyze Now
      </button>
    </form>
  );
};

export default ImageForm;
