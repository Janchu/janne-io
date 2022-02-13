import Image from "next/image";

const HomePage = () => (
  <section>
    <h1>Hello! I&apos;m Janne Jäppinen and I like to code.</h1>
    <div className="avatarContainer">
      <Image
        src="https://avatars0.githubusercontent.com/u/17246317?s=460&amp;u=5abf851d8edb3f25e475327594cce6ce6f77af63&amp;v=4"
        alt="Avatar"
        width={250}
        height={250}
        className="avatar"
      />
    </div>
    <p>
      I&apos;m a <b className="highlight">software developer</b>. My favorite
      language is <b className="js">Javascript</b> and I especially like
      creating applications with technologies like{" "}
      <b className="react">React</b> and <b className="nodejs">Node.js</b>.
    </p>
  </section>
);

export default HomePage;
