

"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full mt-20 border-t border-border bg-card/30 backdrop-blur-md"
    >
      {/* Subtle glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-primary via-purple-400 to-primary animate-pulse"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center text-center space-y-5">
        {/* Animated name glow */}
        <motion.h1
          className="text-2xl font-semibold text-foreground tracking-wide"
          whileHover={{ textShadow: "0 0 10px #38bdf8, 0 0 20px #38bdf8" }}
        >
          Designed & Built by{" "}
          <span className="text-primary font-bold">Sujib Shrestha</span>
        </motion.h1>

        {/* Social icons */}
        <div className="flex space-x-6">
          <motion.a
            href="https://github.com/Sujibshrestha"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={22} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sujib-shrestha-245868282/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={22} />
          </motion.a>

          <motion.a id="#contact"
            href="mailto:sujeeb98@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={22} />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sujib Shrestha. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
