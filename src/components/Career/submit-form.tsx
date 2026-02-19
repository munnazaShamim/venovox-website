"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiClock, FiSend, FiCheckCircle } from "react-icons/fi";

export default function Form() {
  const [formStatus, setFormStatus] = useState("idle");
  const [cvAdded, setCvAdded] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!cvFile) {
      setError("Please upload your CV before submitting.");
      return;
    }

    setFormStatus("sending");
    const formData = new FormData(e.target);

    try {
      const response = await fetch("/career-handler.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("idle");
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setFormStatus("idle");
      alert("Server error. Please try later.");
    }
  };


  return (
    <section className="py-12 bg-white" id="contact-form">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-700">Are You VENOVOX?</h2>
            <div className="w-20 h-1 bg-red-700 mb-8" />
            <p className="text-lg text-gray-600 mb-10 text-justify">
              Can’t find the “fit” at your current workplace? Being a VENOVOX might just be the solution! Express your interest below.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-red-700 rounded-lg text-white"><FiPhone className="text-xl" /></div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-black">Phone</h3>
                  <p className="text-gray-600 mb-1">Contact our team:</p>
                  <a href="tel:+60128008888" className="text-red-700 hover:underline">+6012 800 8888</a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="p-3 bg-red-700 rounded-lg text-white"><FiClock className="text-xl" /></div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-black">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Join the Team</h2>
            <p className="text-gray-600 mb-6">We’ll get back to you as soon as possible</p>

            {formStatus === "idle" && (
              <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
                {[
                  { name: "firstName", icon: <FaUser />, placeholder: "First Name" },
                  { name: "lastName", icon: <FaUser />, placeholder: "Last Name" },
                  { name: "email", icon: <FaEnvelope />, placeholder: "Email", type: "email" },
                  { name: "phone", icon: <FaPhone />, placeholder: "Phone Number" },
                  { name: "linkedin", icon: <FaLinkedin />, placeholder: "LinkedIn URL", type: "url" },
                ].map(({ name, icon, placeholder, type = "text" }) => (
                  <div key={name} className="flex items-center border-b border-gray-300 py-2">
                    <div className="w-9 h-9 bg-red-700 rounded-full text-white flex items-center justify-center mr-3">{icon}</div>
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      className="w-full outline-none text-lg bg-transparent placeholder-gray-400"
                      required={name !== "linkedin"}
                    />
                  </div>
                ))}

                <div className="flex items-center justify-between mt-4">
                  <label className="bg-red-700 text-white font-semibold px-6 py-3 rounded-md text-lg cursor-pointer uppercase hover:bg-red-800 transition">
                    {cvAdded ? "CV Added" : "Upload CV"}
                    <input
                      className="hidden"
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        setCvFile(e.target.files?.[0] || null);
                        setError(null);
                      }}
                    />
                  </label>
                </div>

                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

                <p className="text-sm text-gray-500">*By clicking submit, you agree to the terms & conditions of Venovox Privacy Policy.</p>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-800 transition-colors"
                >
                  <FiSend className="text-lg" /> Submit
                </button>
              </form>
            )}

            {formStatus === "sending" && (
              <div className="h-80 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-red-700 rounded-full mb-6 animate-spin" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sending...</h3>
                <p className="text-gray-600">Please wait while we process your request...</p>
              </div>
            )}

            {formStatus === "success" && (
              <div className="h-80 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <FiCheckCircle className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Submitted Successfully!</h3>
                <p className="text-gray-600">Thank you for showing interest in Venovox.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
