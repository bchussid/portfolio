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

const skillData2 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Git",
  "GitHub",
  "Gitlab",
  "Jira",
  "Vue",
  "SQL",
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
    <section className="pb-12 xl:h-[860px] xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative hidden flex-1 xl:flex">
            <ProfilePic
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[500px] h-[500px] bg-no-repeat relative"
              imgSrc="/about/Headshot-no-bg.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full dark:border-none xl:max-w-[520px] xl:grid-cols-3 xl:border">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qulifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="mt-12 text-lg xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      I am a builder, or more accurately, a tinkerer by nature.
                    </h3>
                    <p className="subtitle mx-auto max-w-xl xl:mx-0">
                      I love to build things, tinker with things, and understand
                      how they work.
                    </p>
                    {/* icons */}
                    <div className="mb-12 grid gap-4 xl:grid-cols-2">
                      {infoData.map((item, index) => (
                        <div
                          className="mx-auto flex items-center gap-x-4 xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="">
                      {/* experience */}
                      <div className="mb-6 flex items-center gap-x-4 text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="font-medium capitalize">
                          {getData(qualificationData, "experience")?.title}
                        </h4>
                      </div>
                      {/* list */}
                      <div className="flex flex-col gap-y-8 ">
                        {getData(qualificationData, "experience").data.map(
                          (
                            item: {
                              employer: string;
                              position: string;
                              years: string;
                            },
                            index: number,
                          ) => {
                            const { employer, position, years } = item;
                            return (
                              <div className="group flex gap-x-8" key={index}>
                                <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                  <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                </div>
                                <div>
                                  <div className="mb-2 text-xl font-semibold leading-none">
                                    {employer}
                                  </div>
                                  <div className="mb-4 text-lg leading-none text-muted-foreground">
                                    {position}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills - old */}
                {/* <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I use</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      
                      <div>
                        {getData(skillData, "skills")?.data.map(
                          (item: { name: string }, index: number) => (
                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                              <div className="font-medium">{item.name}</div>
                              </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent> */}
                {/* skills - new */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I use</h3>
                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                      <div className="mb-4 border-b border-border"></div>
                      {/* skills list */}
                      <ul className="flex flex-wrap justify-center gap-2 text-base">
                        {skillData2.map((item, index) => (
                          <li
                            className="rounded-lg border border-black/[0.1] px-5 py-3 dark:border-primary"
                            key={index}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
