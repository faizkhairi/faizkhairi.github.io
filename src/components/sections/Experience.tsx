import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Experience
          </h2>
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">Where I've Worked</h3>
          <p className="mb-12 max-w-2xl text-muted-foreground">
            From enterprise microservices to open-source CLI tools — building production
            software across the stack.
          </p>
        </motion.div>

        <div className="relative space-y-12 pl-8 before:absolute before:left-0 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i, duration: 0.4 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-8 top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <div className="flex items-center gap-1.5 text-sm text-primary">
                      <Briefcase size={14} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <ul className="mb-4 space-y-1.5">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
