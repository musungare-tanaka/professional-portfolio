'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="w-full max-w-4xl mx-auto py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {/* Email */}
        <a
          href="mailto:musungaretanaka@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white text-lg hover:text-purple-400 transition"
        >
          <MdEmail size={24} href="mailto:musungaretanaka@gmail.com"/>  <span>Email</span>
        </a>

        {/* LinkedIn */}
        <a
            href="https://www.linkedin.com/in/tanaka-musungare-26668a295/"
            target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white text-lg hover:text-purple-400 transition"
        >
          <FaLinkedin size={24} /> <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/musungare-tanaka"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white text-lg hover:text-purple-400 transition"
        >
          <FaGithub size={24} /> <span>GitHub</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/263780001324"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white text-lg hover:text-purple-400 transition"
        >
          <FaWhatsapp size={24} /> <span>WhatsApp</span>
        </a>
      </div>

      {/* Contact Form */}
      <motion.form
        className="space-y-6 bg-dark-blue p-6 rounded-lg shadow-lg shadow-purple-500/50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Type your message here"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <motion.button
            type="submit"
            className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Send Message
          </motion.button>
        </div>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
