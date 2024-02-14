import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Link2Icon } from "lucide-react";

interface ProjectCardProps {
  // image: string;
  // name: string;
  // description: string;
  // link: string;
  project: any;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // console.log(project);
  console.log(project.name);
  return (
    // don't like this background color
    <Card className="bg-muted overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 ">
          <Image
            className="absolute bottom-0 shadow-2xl"
            width={250}
            height={250}
            priority
            src={project.image}
            alt=""
          />
          {/* buttons - not showing up for some reason */}
          <div>
            <Link
              href={project.link}
              className="bg-white w-[54px] h-[54px] rounded-full flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
