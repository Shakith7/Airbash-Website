"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID;
    console.log(emailID, templateID, publicKey);

    if (!emailID || !templateID || !publicKey) {
      console.error(
        "EmailJS service ID, template ID, or public key is missing."
      );
      alert("Failed to send the message. Please try again later.");
      return;
    }

    emailjs
      .send(
        emailID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };
  

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-8">
          <h2 className="text-6xl font-medium mb-4 text-black">
            Have any questions? Get in touch!
          </h2>
          <p className="text-gray-600">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <p className="text-gray-700 mb-4">London, United Kingdom</p>
            <p className="text-gray-700 mb-4">+23 777 2222 89</p>
            <p className="text-gray-700">Airbash.co.uk</p>
          </div>
          {/* Right Section */}
          <div className="lg:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-black"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-black"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-600 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-black"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-gray-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-black"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="message" className="text-gray-600 mb-1">
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-black"
                  placeholder="Feel free to get in touch!"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2 text-right">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
