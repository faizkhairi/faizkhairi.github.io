import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Skills
          </h2>
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">Tech Stack</h3>
          <p className="mb-12 max-w-2xl text-muted-foreground">
            Technologies I use daily in enterprise systems and personal projects.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
              className="rounded-xl border border-border/50 bg-card p-5"
            >
              <h4 className="mb-3 text-sm font-semibold text-primary">
                {skill.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
