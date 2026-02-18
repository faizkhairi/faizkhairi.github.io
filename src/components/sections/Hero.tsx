import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Package } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = profile.taglines[taglineIndex];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % profile.taglines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting ? current.slice(0, displayText.length - 1) : current.slice(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <img
            src="/profile.png"
            alt={profile.name}
            className="mx-auto h-28 w-28 rounded-full border-2 border-primary/20 object-cover shadow-lg sm:h-32 sm:w-32"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-primary uppercase">
            Hey, I'm
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mb-2 text-xl text-muted-foreground sm:text-2xl">
            {profile.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8 h-8"
        >
          <span className="text-lg text-primary sm:text-xl">
            {displayText}
            <span className="animate-blink">|</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={profile.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Package size={16} />
            npm
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
