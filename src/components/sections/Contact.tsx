import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Package, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/faizkhairi",
    href: profile.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/faizkhairi",
    href: profile.linkedin,
  },
  {
    icon: Package,
    label: "npm",
    value: "npmjs.com/~faizkhairi",
    href: profile.npm,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Contact
          </h2>
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">Let's Connect</h3>
          <p className="mb-12 text-muted-foreground">
            Open to full-time opportunities in Full-Stack Development and DevOps Engineering.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-5 text-left transition-colors hover:border-primary/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <link.icon size={20} />
              </div>
              <div>
                <p className="text-sm font-medium">{link.label}</p>
                <p className="text-sm text-muted-foreground">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-1.5 text-sm text-muted-foreground"
        >
          <MapPin size={14} />
          <span>{profile.location}</span>
        </motion.div>
      </div>
    </section>
  );
}
