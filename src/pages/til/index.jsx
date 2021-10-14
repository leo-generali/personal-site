import { Layout } from "@/components";
import { getTILs, getTopics } from "@/lib/tils";

const TOPIC_KEY_TO_NAME = {
  typescript: "TypeScript",
  javascript: "JavaScript",
  nextjs: "NextJS",
};

const NUMBER_OF_FEATURED_TILS = 2;

function getTilsByTopic(til, topic) {
  return til.topic === topic;
}

export default function TilIndexPage({ topics, tils }) {
  const featuredTils = [...tils].slice(0, NUMBER_OF_FEATURED_TILS);

  return (
    <Layout>
      <section className="grid gap-8 mb-8 md:grid-cols-2">
        <p className="text-xl font-bold col-span-full">Recent TILs</p>
        {featuredTils.map((til) => (
          <a
            className="bg-dotted-indigo-200 hover:bg-dotted-indigo-400 group p-3 -m-2 rounded-xl block"
            href={`/til/${til.slug}`}
          >
            <div className="border-2 border-indigo-200 group-hover:border-indigo-400 bg-white p-4 rounded-lg">
              <span className="font-bold">
                {TOPIC_KEY_TO_NAME[til.topic]}:{" "}
              </span>
              <span className="text-indigo-400 group-hover:text-indigo-600">
                {til.title}
              </span>
              <span className="text-indigo-400 group-hover:text-indigo-600 mr-1"></span>
              <time className="block mt-4 text-sm font-semibold text-gray-500">
                {til.date.short}
              </time>
            </div>
          </a>
        ))}
      </section>
      <section>
        <ol>
          {topics.map((topic, topicIndex) => {
            const filteredTils = tils.filter((til) =>
              getTilsByTopic(til, topic)
            );

            const isFirstTopic = topicIndex === 0;

            return (
              <li key={topic}>
                <p
                  className={`text-xl font-bold ${isFirstTopic ? "" : "mt-6"}`}
                >
                  {TOPIC_KEY_TO_NAME[topic]}
                </p>
                <div className="flex flex-col">
                  {filteredTils.map((til) => {
                    return (
                      <a
                        className="group hover:bg-indigo-50 p-3 rounded-md -mx-3 transition duration-75"
                        href={`/til/${til.slug}`}
                      >
                        <div className="flex justify-between align-center">
                          <span className="text-indigo-400 border-b-2 border-indigo-400 transition duration-75 group-hover:text-indigo-600 group-hover:border-indigo-600">
                            {til.title}
                          </span>
                          <time>{til.date.short}</time>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const topics = await getTopics();
  const tils = await getTILs(["slug", "title", "topic"]);

  return {
    props: {
      tils,
      topics,
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
  unstable_JsPreload: false,
};
