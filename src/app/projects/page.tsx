"use client";

import React, { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/4.png",
    name: "Phantom Theater",
    description:
      "This is the description of the project, This is the description of the project, This is the description of the project.",
    link: "/",
  },
  {
    image: "/work/2.png",
    name: "This Here Portfolio",
    description:
      "This is the description of the project - specifically this here portfolio... This is the description of the project.",
    link: "/",
  },
  {
    image: "/work/3.png",
    name: "Restaurant Generator",
    description:
      "This is the description of the project, This is the description of the project, This is the description of the project.",
    link: "/",
  },
  {
    image: "/work/4.png",
    name: "Some other Project - ecommerce site maybe?",
    description:
      "This is the description of the project, This is the description of the project, This is the description of the project.",
    link: "/",
  },
  {
    image: "/work/1.png",
    name: "Some other Project - ecommerce site maybe?",
    description:
      "This is the description of the project, This is the description of the project, This is the description of the project.",
    link: "/",
  },
  {
    image: "/work/2.png",
    name: "Some other Project - ecommerce site maybe?",
    description:
      "This is the description of the project, This is the description of the project, This is the description of the project.",
    link: "/",
  },
  {
    image: "/work/3.png",
    name: "Some other Project - ecommerce site maybe?",
    description:
      "This is the description of the project, This is the description of the project, This is the description of the project.",
    link: "/",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 xl:mb-48">
          {projectData.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
