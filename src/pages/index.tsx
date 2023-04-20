import Image from "next/image";
import Card from "../components/Card";
import {
  BuildingOfficeIcon,
  CodeBracketIcon,
  LinkIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const HomePage = () => (
  <section className="grid grid-cols-12 gap-4">
    <div className="col-span-12 md:col-span-8 order-last md:order-first flex flex-col gap-4">
      <Card>
        <h1 className="font-bold my-4 text-2xl">
          Hi! I&apos;m Janne and I like to code.
        </h1>
        <p>
          I&apos;m a <b className="highlight">software developer</b>. My
          favorite language is <b className="js">Javascript</b> and I especially
          like creating applications with technologies like{" "}
          <b className="react">React</b> and <b className="nodejs">Node.js</b>.
        </p>
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
