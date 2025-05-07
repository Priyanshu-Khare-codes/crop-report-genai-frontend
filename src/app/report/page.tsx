// app/report/page.tsx
"use client";

import { useState } from "react";
import ImageForm from "@/components/ImageForm";

const loadingSteps = ["Processing Image", "Analyzing Image", "Generating Report"];

export default function ReportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [report, setReport] = useState<any>(null);

  const handleSubmitImage = async (image: File) => {
    setIsSubmitting(true);
    setLoadingIndex(0);

    const loadingInterval = setInterval(() => {
      setLoadingIndex((prev) => (prev + 1) % loadingSteps.length);
    }, 1000);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch("http://localhost:8000/report", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      clearInterval(loadingInterval);
      setReport(data);
    } catch (err) {
      console.error(err);
      clearInterval(loadingInterval);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-br from-green-50 to-green-100 min-h-screen transition-all duration-700">
      {!report && (
        <>
          <ImageForm onSubmitImage={handleSubmitImage} isSubmitting={isSubmitting} />
          {isSubmitting && (
            <div className="mt-10 text-2xl font-mono text-green-700 animate-pulse">
              {loadingSteps[loadingIndex]}...
            </div>
          )}
        </>
      )}

      {report && (
        <div className="bg-white rounded-xl p-8 mt-10 shadow-lg max-w-2xl w-full animate-fadeInUp">
          <h2 className="text-3xl font-bold text-green-700 font-josefin text-center mb-6">
            🌿 Crop Disease Report
          </h2>

          <div className="space-y-4 text-gray-800 font-mono">
            <p><strong>Crop Name:</strong> {report.crop_name}</p>
            <p><strong>Disease:</strong> {report.crop_disease}</p>

            <div>
              <strong>Symptoms:</strong>
              <ul className="list-disc list-inside">
                {report.crop_disease_symptoms.map((item: string, idx: number) => (
                  <li key={`symptom-${idx}`}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Cause:</strong>
              <ul className="list-disc list-inside">
                {report.crop_disease_cause.map((item: string, idx: number) => (
                  <li key={`cause-${idx}`}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Management:</strong>
              <ul className="list-disc list-inside">
                {report.crop_disease_management.map((item: string, idx: number) => (
                  <li key={`management-${idx}`}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Prevention:</strong>
              <ul className="list-disc list-inside">
                {report.crop_disease_prevention.map((item: string, idx: number) => (
                  <li key={`prevention-${idx}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
