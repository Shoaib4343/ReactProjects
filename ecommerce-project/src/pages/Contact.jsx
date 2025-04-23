import React, { useState } from "react";

const Contact = () => {
  const [err, setErr] = useState({});
  const [contactInput, setContactInput] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleContactInput = (e) => {
    setContactInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission with validation
  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    let validation = {};

    if (!contactInput.fullName.trim()) {
      validation.fullName = "Full Name is required";
    }

    if (!contactInput.email.trim()) {
      validation.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(contactInput.email)) {
      validation.email = "Invalid email address";
    }

    if (!contactInput.message.trim()) {
      validation.message = "Message is required";
    }

    if (Object.keys(validation).length === 0) {
      try {
        alert("Message sent successfully!");
        setContactInput({ fullName: "", email: "", subject: "", message: "" });
        setErr({});
      } catch (error) {
        console.log(error);
      }
    } else {
      setErr(validation);
    }
  };

  return (
    <section className="min-h-screen bg-white px-6 py-16 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact <span className="text-red-600">Us</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Have questions? We're here to help. Get in touch with us anytime.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleContactFormSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your Full Name"
              className="mt-1 block w-full p-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              value={contactInput.fullName}
              onChange={handleContactInput}
            />
            {err.fullName && <p className="text-red-500 text-sm">{err.fullName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="mt-1 block w-full p-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              value={contactInput.email}
              onChange={handleContactInput}
            />
            {err.email && <p className="text-red-500 text-sm">{err.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="mt-1 block w-full p-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              value={contactInput.subject}
              onChange={handleContactInput}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              value={contactInput.message}
              onChange={handleContactInput}
            ></textarea>
            {err.message && <p className="text-red-500 text-sm">{err.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="text-center space-y-2 text-gray-600">
          <p>📧 Email: support@example.com</p>
          <p>📍 Address: 123 Main Street, Karachi, Pakistan</p>
          <p>📞 Phone: +92 300 1234567</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
