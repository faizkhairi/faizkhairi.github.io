import { motion } from "framer-motion";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            About
          </h2>
          <h3 className="mb-8 text-3xl font-bold sm:text-4xl">Who I Am</h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-12 max-w-3xl text-lg leading-relaxed text-muted-foreground"
        >
          {about.summary}
        </motion.p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {about.highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="rounded-xl border border-border/50 bg-card p-6 text-center"
            >
              <p className="text-3xl font-bold text-primary">{item.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
