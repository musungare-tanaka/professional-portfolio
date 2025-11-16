'use client'; 
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion"; 

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  liveDemo?: string;
}

const ProjectCard = ({ title, description, tags, image, github, liveDemo }: ProjectCardProps) => {
  // Improved tag colors with better contrast and consistency
  const tagColors: Record<string, { bg: string; text: string }> = {
    "java": { bg: "#f89820", text: "#ffffff" },
    "nextjs": { bg: "#000000", text: "#ffffff" },
    "next.js": { bg: "#000000", text: "#ffffff" },
    "mongodb": { bg: "#47A248", text: "#ffffff" },
    "react": { bg: "#61DAFB", text: "#000000" },
    "nodejs": { bg: "#68A063", text: "#ffffff" },
    "node.js": { bg: "#68A063", text: "#ffffff" },
    "typescript": { bg: "#3178C6", text: "#ffffff" },
    "ui/ux": { bg: "#FF6B6B", text: "#ffffff" },
    "spring-ai": { bg: "#6DB33F", text: "#ffffff" },
    "html": { bg: "#E34F26", text: "#ffffff" },
    "css": { bg: "#1572B6", text: "#ffffff" },
    "tailwind": { bg: "#06B6D4", text: "#ffffff" },
  };

  // Normalize tag names
  const normalizeTag = (tag: string) => {
    return tag.toLowerCase().replace(/^#/, '');
  };

  return (
    <motion.div
      className="group border border-gray-700 hover:border-purple-400 shadow-lg hover:shadow-purple-400/20 rounded-xl p-6 bg-gray-900/50 backdrop-blur-sm text-white transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }} 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
    >
      {/* Image with improved aspect ratio and loading */}
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={`${title} preview`}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Title with better typography */}
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
        {title}
      </h3>

      {/* Description with improved spacing */}
      <p className="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Tags with improved styling */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => {
          const normalizedTag = normalizeTag(tag);
          const colors = tagColors[normalizedTag] || { bg: "#4B5563", text: "#ffffff" };
          
          return (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide transition-transform hover:scale-105"
              style={{ 
                backgroundColor: colors.bg, 
                color: colors.text,
                boxShadow: `0 2px 4px ${colors.bg}20`
              }}
            >
              {normalizedTag}
            </span>
          );
        })}
      </div>

      {/* Action Links with improved styling */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label={`View ${title} source code on GitHub`}
          >
            <FaGithub size={16} />
            <span>GitHub</span>
          </a>
        )}
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label={`View ${title} live demo`}
          >
            <FiExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    
    {
      title: "Joinai Support Assistant",
      description: "An AI-powered customer support assistant that automates ticket management and provides instant responses to user queries.",
      tags: ["java", "nextjs", "mongodb", "spring-ai","vector-database"],
      image: "/Images/customer-service-ai.webp",
      github: "https://github.com/musungare-tanaka/SpringAI",
      liveDemo: "https://joinai-support-assistant.vercel.app/"

    },
    {
       
      title: "Focus Flow --Still in development",
      description: "A productivity application designed to enhance focus and time management through task tracking. It is Powered by Spring AI + OpenAI API. ",
      tags: ["java", "nextjs", "mongodb", "spring-ai","OpenAI"],
      image: "/Images/productivity.png",
      github: "https://github.com/musungare-tanaka/Focus-Flow-Frontend",
      liveDemo: "https://focus-flow-frontend-nine.vercel.app"

    
    },
     
    {
      title: "Intaractive CV",
      description: "An interactive AI portfolio that showcases my projects and skills, featuring AI-driven insights and personalized content.",
      tags: ["typescript", "nextjs", "ui/ux","spring-ai","OpenAI","vector-database"],
      image: "/Images/self.png",
      github: "https://github.com/musungare-tanaka/professional-portfolio",
      liveDemo: "https://my-personal-ai-interface.vercel.app/"
    },
    {
      title: "Community Forum",
      description: "A group chat application to connect people with shared interests, featuring real-time messaging and community management tools.",
      tags: ["java", "nextjs", "mongodb"],
      image: "/Images/chat-app.jpg",
      github: "https://github.com/musungare-tanaka/CommunityForumApp",
      liveDemo: "https://www.community-forum.co.zw/"
    },
    {
      title: "Online Banking Platform",
      description: "A comprehensive web application that simulates modern banking operations with secure transactions and user management.",
      tags: ["react", "nodejs", "java"],
      image: "/Images/bankingDashboard.png",
      github: "https://github.com/musungare-tanaka/Front-End",
      liveDemo: "https://front-end-gray-one.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my skills, projects, and professional experience with modern design principles.",
      tags: ["typescript", "nextjs", "ui/ux"],
      image: "/Images/portfolio.png",
      github: "https://github.com/musungare-tanaka/professional-portfolio",
      liveDemo: "https://tanaka-musungare.vercel.app/"
    },
   
    {
      title: "JoinAI Support System",
      description: "An intelligent customer support ticketing system powered by AI for automated responses and efficient ticket management.",
      tags: ["typescript", "spring-ai", "java", "ui/ux", "nextjs"],
      image: "/Images/customer-support.avif",
      github: "https://github.com/musungare-tanaka/joinai-support-dashboard",
      liveDemo: "https://joinai-support-dashboard.vercel.app/"
    },
    {
      title: "Herbalife Wellness",
      description: "A professional website showcasing health and wellness products with modern e-commerce features and responsive design.",
      tags: ["nextjs", "tailwind", "ui/ux"],
      image: "/Images/herbalLife.png",
      github: "https://github.com/musungare-tanaka/HerbalClinic",
      liveDemo: "https://save-a-man.vercel.app/"
    },
    {
      title: "Design Patterns Library",
      description: "A comprehensive repository demonstrating various software design patterns with practical Java implementations for scalable code architecture.",
      tags: ["java"],
      image: "/Images/phone.png",
      github: "https://github.com/musungare-tanaka/Design-Patterns"
    }
  ];

  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A collection of projects that showcase my skills in full-stack development, 
          UI/UX design, and modern web technologies.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;