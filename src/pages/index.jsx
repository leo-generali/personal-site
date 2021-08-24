import { Layout, Link } from "@/components";
import { PROJECTS } from "@/constants";

export default function HomePage() {
  return (
    <Layout>
      <section class="mb-20">
        <h1
          class="intro text-white mb-24 text-4xl font-extrabold reveal leading-tight"
          style={{
            "--animation-delay": "0.2s",
            "--animation-reveal-start-pos": "-1rem",
            lineHeight: 1.1111111,
          }}
        >
          Hey there!{" "}
          <span class="mr-1" role="img" aria-label="Wave emoji">
            👋{" "}
          </span>{" "}
          I'm Leo, a software engineer living and working in New York City.
        </h1>
        <div class="flow reveal" style={{ "--animation-delay": "0.5s" }}>
          <p>
            I'm currently working over at{" "}
            <Link href="https://www.hearstautos.com/">Hearst Autos</Link> where
            I help build applications that connect automobile shoppers and
            vendors.
          </p>
          <p>
            Getting in touch with me is easy! You can find me on{" "}
            <Link href="https://twitter.com/itsLeeOhGee">Twitter</Link>,{" "}
            <Link href="https://www.linkedin.com/in/leogenerali/">
              LinkedIn
            </Link>
            , or <Link href="https://github.com/leo-generali">Github</Link>. To
            say hello, you can{" "}
            <Link href="mailto:me@leogenerali.com?Subject=Hello!">
              reach me by email
            </Link>
            .
          </p>
          <p>
            If I'm not coding I'm probably out running. If that sounds like your
            type of thing, you can{" "}
            <Link href="https://www.strava.com/athletes/11876587">
              check out my latest runs
            </Link>{" "}
            on Strava.
          </p>
          <p>
            When I find myself with a spare minute or two I enjoy working on
            personal projects. I'll typically try to solve an issue I'm running
            into. I learn a thing or two in the process and maybe solve a
            problem for others too. Here are some of the cooler things I've
            made:
          </p>
        </div>
      </section>
      <section
        class="reveal"
        style={{
          "--animation-delay": "0.2s",
        }}
      >
        {PROJECTS.map((project) => {
          return (
            <div>
              <p class="text-xl font-bold mb-4">{project.name}</p>
              <div class="flow border-l-4 border-gray-500 pl-4">
                <p>{project.description}</p>
              </div>
              <div class="mt-4">
                <Link href={project.liveUrl}>Live</Link> |{" "}
                <Link href={project.githubUrl}>Github</Link>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
}
