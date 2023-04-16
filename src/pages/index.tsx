import Image from "next/image";
import Card from "../components/Card";
import { LinkIcon } from "@heroicons/react/24/outline";

const HomePage = () => (
  <section className="grid grid-cols-12 gap-4">
    <div className="col-span-12 md:col-span-8 order-last md:order-first">
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
      <Card>
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
              Web developer
            </span>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-center">
          I&apos;m a <b className="highlight">software developer</b>. My
          favorite language is <b className="js">Javascript</b> and I especially
          like creating applications with technologies like{" "}
          <b className="react">React</b> and <b className="nodejs">Node.js</b>.
        </p>
        <div className="flex justify-center gap-2 my-4">
          <a
            className="font-semibold underline"
            href="https://github.com/Janchu"
          >
            Github
          </a>
          <a
            className="font-semibold underline"
            href="https://www.linkedin.com/in/jannejäppinen/"
          >
            LinkedIn
          </a>
        </div>
      </Card>
    </div>
  </section>
);

export default HomePage;
