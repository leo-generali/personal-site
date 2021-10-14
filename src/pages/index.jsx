import { getContent } from "@/lib/content";
import { Layout, Link, MDX } from "@/components";
import { PROJECTS } from "@/constants";

export default function HomePage({ content }) {
  return (
    <Layout description="Leo Generali is a software engineer living in New York City. He creates thoughtfully designed web apps.">
      <section className="mb-20">
        <h1
          className="intro text-white mb-24 text-4xl font-extrabold reveal leading-tight"
          style={{
            "--animation-delay": "0.2s",
            "--animation-reveal-start-pos": "-1rem",
            lineHeight: 1.1111111,
          }}
        >
          Hey there!{" "}
          <span className="mr-1" role="img" aria-label="Wave emoji">
            👋
          </span>{" "}
          I'm Leo, a software engineer living and working in New York City.
        </h1>
        <div className="flow reveal" style={{ "--animation-delay": "0.5s" }}>
          <MDX {...content} />
        </div>
      </section>
      <section
        className="reveal"
        style={{
          "--animation-delay": "0.7s",
        }}
      >
        {PROJECTS.map((project) => {
          return (
            <div key={project.name}>
              <p className="text-xl font-bold mb-4">{project.name}</p>
              <div className="flow border-l-4 border-gray-500 pl-4">
                <p>{project.description}</p>
              </div>
              <div className="mt-4">
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

export async function getStaticProps() {
  const content = await getContent("index");

  return {
    props: {
      content,
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
  unstable_JsPreload: false,
};
