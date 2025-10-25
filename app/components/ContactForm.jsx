"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your form submission logic here
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#18181b] to-[#27272a] text-white px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-400">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="bg-[#27272a] rounded-lg p-8 md:p-12 shadow-xl"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-[#18181b] border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-[#18181b] border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="subject" className="text-sm font-semibold mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-[#18181b] border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white"
              placeholder="What's this about?"
            />
          </div>

          <div className="flex flex-col mb-8">
            <label htmlFor="message" className="text-sm font-semibold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="px-4 py-3 bg-[#18181b] border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Send Message
          </button>

          {submitted && (
            <div className="mt-4 p-4 bg-green-900 border border-green-700 rounded-lg text-green-100">
              Thank you! Your message has been sent successfully. I'll get back to you soon.
            </div>
          )}
        </form>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:contact@fazalkadivar.com"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              contact@fazalkadivar.com
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <a
              href="https://github.com/fazalkadivar21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              @fazalkadivar21
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/fazalkadivar21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              @fazalkadivar21
            </a>
          </div>
        </div>
      </div>

      {/* JSON-LD Organization Schema with Contact */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Fazal Kadivar",
            "url": "https://fazalkadivar.com",
            "email": "contact@fazalkadivar.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "email": "contact@fazalkadivar.com"
            },
            "sameAs": [
              "https://github.com/fazalkadivar21",
              "https://linkedin.com/in/fazalkadivar21",
              "https://twitter.com/fazalkadivar21"
            ]
          }),
        }}
      />
    </section>
  );
}
