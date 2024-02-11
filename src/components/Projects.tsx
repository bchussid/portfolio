"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    name: "Phantom Theater",
    description:
      "This is the description of the project, This is the description of the project, This is the description of the project.",
    link: "/",
  },
  {
    image: "/work/2.png",
    name: "This Here Portfolio",
    description:
      "This is the description of the project - specifically this here portfolio... This is the description of the project, This is the description of the project, This is the description of the project.",
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
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
            ratione.
          </p>
          <Link href="/projects">
            <Button>More about this</Button>
          </Link>
        </div>
        {/* slider */}
        <div>
          <Carousel className="bg-pink-100">
            <CarouselContent>
              {projectData.slice(0, 3).map((project, index) => (
                <CarouselItem key={index}>hey</CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
