import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal, Package } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const typeStyles: Record<Project["type"], { badge: string; label: string }> = {
  web: { badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400", label: "Web App" },
  cli: { badge: "bg-green-500/10 text-green-600 dark:text-green-400", label: "CLI Tool" },
  boilerplate: { badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400", label: "Template" },
  infra: { badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400", label: "Infrastructure" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const style = typeStyles[project.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      className="group flex flex-col rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/30"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className={cn("rounded-full px-3 py-1 text-xs font-medium", style.badge)}>
          {style.label}
        </span>
        <div className="flex gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`Live demo of ${project.title}`}
            >
              <ExternalLink size={16} />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label={`GitHub repo for ${project.title}`}
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      <h4 className="mb-2 text-lg font-semibold">{project.title}</h4>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {project.npmInstall && (
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
          <Terminal size={14} className="shrink-0 text-muted-foreground" />
          <code className="text-xs text-muted-foreground">{project.npmInstall}</code>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Projects
          </h2>
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">What I've Built</h3>
          <p className="mb-12 max-w-2xl text-muted-foreground">
            Production applications, published npm packages, and infrastructure demos — all with
            live deployments, automated tests, and CI/CD pipelines.
          </p>
        </motion.div>

        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {other.length > 0 && (
          <>
            <h4 className="mb-4 text-lg font-semibold text-muted-foreground">More Projects</h4>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {other.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <Package size={16} />
          <span>
            Plus 5 production-ready boilerplate templates on{" "}
            <a
              href="https://github.com/faizkhairi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
