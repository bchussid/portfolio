import ProfilePic from "./ProfilePic";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  Cpu,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ben C",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "123 456 7890",
  },
  {
    icon: <MailIcon size={20} />,
    text: "test@testmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "birthday?",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelors in Biology",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Durham, NC",
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Frontend Development",
      },
      {
        name: "JavaScript, JS Frameworks",
      },
      {
        name: "Full Stack Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: <Cpu size={20} />,
      },
      {
        imgPath: <Cpu size={20} />,
      },
      {
        imgPath: <Cpu size={20} />,
      },
      {
        imgPath: <Cpu size={20} />,
      },
    ],
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        school: "Univerisy of Vermont",
        degree: "Bachelor of Science",
      },
      {
        school: "Burlington Code Academy",
        degree: "Full Stack Software Development",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        employer: "Phantom Theater",
        position: "Full Stack Software Engineer",
        years: "2020-2021",
      },
      {
        employer: "Xsolla Inc.",
        position: "Front End Software Engineer",
        years: "2022-2023",
      },
      {
        employer: "AJBApps",
        position: "Full Stack Software Engineer",
        years: "2023-Present",
      },
    ],
  },
];
const About = () => {
  const getData = (arr: Array<any>, title: string) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <ProfilePic
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[500px] h-[500px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList>
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="qualifications">Qulifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div>
                {/* personal */}
                <TabsContent value="personal">personal info</TabsContent>
                <TabsContent value="personal">personal info</TabsContent>
                <TabsContent value="personal">personal info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
