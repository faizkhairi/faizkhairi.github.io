import { describe, it, expect } from "vitest";
import { profile, about, projects, skills, experiences } from "@/data/portfolio";

describe("portfolio data", () => {
  describe("profile", () => {
    it("has required fields", () => {
      expect(profile.name).toBe("Faiz Khairi");
      expect(profile.email).toContain("@");
      expect(profile.github).toMatch(/^https:\/\/github\.com\//);
      expect(profile.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\//);
      expect(profile.npm).toMatch(/^https:\/\/www\.npmjs\.com\//);
    });

    it("has taglines for typing animation", () => {
      expect(profile.taglines.length).toBeGreaterThanOrEqual(3);
      profile.taglines.forEach((t) => expect(t.length).toBeGreaterThan(0));
    });
  });

  describe("about", () => {
    it("has summary and highlights", () => {
      expect(about.summary.length).toBeGreaterThan(50);
      expect(about.highlights.length).toBe(4);
    });

    it("highlights have label and value", () => {
      about.highlights.forEach((h) => {
        expect(h.label).toBeTruthy();
        expect(h.value).toBeTruthy();
      });
    });
  });

  describe("projects", () => {
    it("has at least 5 projects", () => {
      expect(projects.length).toBeGreaterThanOrEqual(5);
    });

    it("each project has required fields", () => {
      projects.forEach((p) => {
        expect(p.title).toBeTruthy();
        expect(p.description.length).toBeGreaterThan(20);
        expect(p.tech.length).toBeGreaterThan(0);
        expect(p.githubUrl).toMatch(/^https:\/\/github\.com\//);
        expect(["web", "cli", "boilerplate", "infra", "library", "mobile"]).toContain(p.type);
      });
    });

    it("every project count claim matches the project list", () => {
      const count = String(projects.length);
      expect(about.highlights.find((h) => h.label === "Projects Shipped")?.value).toBe(count);
      expect(profile.taglines.join(" ")).toContain(`Shipping ${count} projects`);
      expect(about.summary).toContain(`with ${count} production projects`);
      expect(experiences.flatMap((e) => e.achievements).join(" ")).toContain(`Shipped ${count} projects`);
    });

    it("has featured projects", () => {
      const featured = projects.filter((p) => p.featured);
      expect(featured.length).toBeGreaterThanOrEqual(3);
    });

    it("CLI projects have an npm or pip install command", () => {
      const cliProjects = projects.filter((p) => p.type === "cli");
      cliProjects.forEach((p) => {
        expect(p.npmInstall).toMatch(/^(npm|pip) /);
      });
    });

    it("web projects have live URLs, except those not yet deployed", () => {
      const notDeployed = ["ApprovalKit"];
      const webProjects = projects.filter((p) => p.type === "web" && !notDeployed.includes(p.title));
      expect(webProjects.length).toBeGreaterThan(0);
      webProjects.forEach((p) => {
        expect(p.liveUrl).toMatch(/^https:\/\//);
      });
    });
  });

  describe("skills", () => {
    it("has 8 skill categories", () => {
      expect(skills.length).toBe(8);
    });

    it("each category has items", () => {
      skills.forEach((s) => {
        expect(s.category).toBeTruthy();
        expect(s.items.length).toBeGreaterThan(0);
      });
    });

    it("includes expected categories", () => {
      const categories = skills.map((s) => s.category);
      expect(categories).toContain("Frontend");
      expect(categories).toContain("Backend");
      expect(categories).toContain("AI / ML");
      expect(categories).toContain("Database");
    });
  });

  describe("experiences", () => {
    it("has at least 2 entries", () => {
      expect(experiences.length).toBeGreaterThanOrEqual(2);
    });

    it("each experience has required fields", () => {
      experiences.forEach((e) => {
        expect(e.role).toBeTruthy();
        expect(e.company).toBeTruthy();
        expect(e.period).toBeTruthy();
        expect(e.location).toBeTruthy();
        expect(e.description.length).toBeGreaterThan(20);
        expect(e.achievements.length).toBeGreaterThan(0);
        expect(e.tech.length).toBeGreaterThan(0);
      });
    });
  });
});
