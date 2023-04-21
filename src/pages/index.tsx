import React from "react";
import Image from "next/image";
import {
  BuildingOfficeIcon,
  CodeBracketIcon,
  CommandLineIcon,
  LinkIcon,
  MapPinIcon,
  ServerIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";
import Card from "../components/Card";
import Hightlight from "../components/Highlight";

export type ProjectItem = {
  name: string;
  description: string;
  url?: string;
  icon?: React.ReactNode;
  keywords?: string[];
};

const projects: ProjectItem[] = [
  {
    name: "OJK Discord Bot",
    description: "A discord bot developed for a group of friends.",
    url: "https://github.com/Janchu/ojk-discord-bot",
    icon: <CodeBracketIcon className="h-6 w-6" />,
    keywords: ["Discord.js", "Node.js"],
  },
  {
    name: "janne.io",
    description: "This portfolio website.",
    url: "https://github.com/Janchu/janne-io",
    icon: <CodeBracketIcon className="h-6 w-6" />,
    keywords: ["NextJS", "React", "Tailwind CSS", "TypeScript", "Vercel"],
  },
  {
    name: "Home server",
    description:
      "My personal home server that serves as a NAS and the hub for my home automation.",
    icon: <ServerStackIcon className="h-6 w-6" />,
    keywords: ["Unraid", "NAS", "Docker", "Home Assistant"],
  },
];

const HomePage = () => (
  <section className="grid grid-cols-12 gap-4">
    <div className="col-span-12 md:col-span-8 order-last md:order-first flex flex-col gap-4">
      <Card>
        <h1 className="font-bold my-4 text-2xl">
          Hi! I&apos;m Janne and I like to code.
        </h1>
        <p className="leading-7 my-2">
          I&apos;m a <Hightlight>software developer.</Hightlight> I have
          experience in many areas of software development but I&apos;m most
          passionate about <Hightlight>frontend development</Hightlight> and
          providing end users the best possible{" "}
          <Hightlight>user experience.</Hightlight> I like to try out new things
          and experiment with new technologies to broaden my understanding and
          keep up with the rapidly evolving world of software development.
        </p>
        <p className="">
          If you like what you&apos;re seeing here, feel free to{" "}
          <Hightlight>message me on LinkedIn</Hightlight> or star my Github
          repositories.
        </p>
      </Card>
      <Card>
        <h1 className="font-bold my-4 text-2xl">My projects</h1>
        <ul>
          {projects.map((project) => (
            <li className="flex gap-4 my-4 items-center" key={project.name}>
              {project.icon}
              <div className="flex flex-col gap-2">
                <div>
                  <h4 className="font-bold">
                    {project.url ? (
                      <a href={project.url} className="hover:underline">
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h4>
                  <p className=" text-gray-700 dark:text-gray-300 ">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-row flex-wrap gap-1">
                  {project.keywords?.map((keyword) => (
                    <span
                      key={keyword}
                      className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
    <div className="col-span-12 md:col-span-4 order-first md:order-last">
      <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-none p-8 pb-12 rounded-lg flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <Image
            src="https://avatars0.githubusercontent.com/u/17246317?s=460&amp;u=5abf851d8edb3f25e475327594cce6ce6f77af63&amp;v=4"
            alt="Avatar"
            width={250}
            height={250}
            className="rounded-full"
          />
          <div className="text-center my-6">
            <h1 className="font-bold text-2xl mb-1">Janne Jäppinen</h1>
            <span className="text-gray-500 dark:text-gray-400">
              Software developer
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <MapPinIcon className="h-6 w-6 flex-shrink-0" />
            <span>Vihti, Finland</span>
          </div>

          <div className="flex gap-2 items-center">
            <BuildingOfficeIcon className="h-6 w-6 flex-shrink-0" />
            <span>
              Software Developer at{" "}
              <a
                className="font-medium underline"
                href="https://www.smartum.fi/"
              >
                Smartum Oy
              </a>
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <CodeBracketIcon className="h-6 w-6 flex-shrink-0" />
            <a
              className="font-medium underline"
              href="https://github.com/Janchu"
            >
              Github
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <LinkIcon className="h-6 w-6 flex-shrink-0" />
            <a
              className="font-medium underline"
              href="https://www.linkedin.com/in/jannejäppinen/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomePage;
