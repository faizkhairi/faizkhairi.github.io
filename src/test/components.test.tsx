import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

describe("Hero", () => {
  it("renders name and title", () => {
    render(<Hero />);
    expect(screen.getByText("Faiz Khairi")).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Developer & DevOps Engineer")).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText("View Projects")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("npm")).toBeInTheDocument();
  });
});

describe("About", () => {
  it("renders section heading", () => {
    render(<About />);
    expect(screen.getByText("Who I Am")).toBeInTheDocument();
  });

  it("renders highlight stats", () => {
    render(<About />);
    expect(screen.getByText("4+")).toBeInTheDocument();
    expect(screen.getByText("Years Experience")).toBeInTheDocument();
  });
});

describe("Projects", () => {
  it("renders section heading", () => {
    render(<Projects />);
    expect(screen.getByText("What I've Built")).toBeInTheDocument();
  });

  it("renders project titles", () => {
    render(<Projects />);
    expect(screen.getByText("AI Code Reviewer")).toBeInTheDocument();
    expect(screen.getByText("Short URL")).toBeInTheDocument();
  });

  it("renders project type badges", () => {
    render(<Projects />);
    const webBadges = screen.getAllByText("Web App");
    expect(webBadges.length).toBeGreaterThanOrEqual(1);
  });
});

describe("Skills", () => {
  it("renders section heading", () => {
    render(<Skills />);
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
  });

  it("renders skill categories", () => {
    render(<Skills />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("AI / ML")).toBeInTheDocument();
  });

  it("renders individual skills", () => {
    render(<Skills />);
    expect(screen.getByText("React 19")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
});

describe("Experience", () => {
  it("renders section heading", () => {
    render(<Experience />);
    expect(screen.getByText("Where I've Worked")).toBeInTheDocument();
  });

  it("renders experience entries", () => {
    render(<Experience />);
    expect(screen.getByText("Software Developer")).toBeInTheDocument();
    expect(screen.getByText("Datascience Sdn. Bhd.")).toBeInTheDocument();
  });

  it("renders achievements", () => {
    render(<Experience />);
    expect(screen.getByText(/200\+ responsive pages/)).toBeInTheDocument();
  });

  it("renders all experience entries", () => {
    render(<Experience />);
    expect(screen.getByText("Bayam Teknologi")).toBeInTheDocument();
    expect(screen.getByText("PSI Incontrol Sdn. Bhd.")).toBeInTheDocument();
    expect(screen.getByText("Atiera Technology Enterprise")).toBeInTheDocument();
  });
});

describe("Contact", () => {
  it("renders section heading", () => {
    render(<Contact />);
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
  });

  it("renders contact links", () => {
    render(<Contact />);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("npm")).toBeInTheDocument();
  });

  it("renders location", () => {
    render(<Contact />);
    expect(screen.getByText("Kuala Lumpur, Malaysia")).toBeInTheDocument();
  });
});

describe("Navbar", () => {
  it("renders brand logo", () => {
    render(<Navbar />);
    expect(screen.getByText("FK")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("renders copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/Faiz Khairi/)).toBeInTheDocument();
    expect(screen.getByText(/Built with React/)).toBeInTheDocument();
  });
});
