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
              imgSrc="/about/about-pic.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
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
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      I am a builder, or more accurately, a tinkerer by nature.
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I love to build things, tinker with things, and understand
                      how they work.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
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
                      <div className="flex gap-x-4 items-center text-[22px] text-primary mb-6">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
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
                            index: number
                          ) => {
                            const { employer, position, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {employer}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {position}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                      {/* education */}
                      <div>education</div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I use</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skills list */}
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
