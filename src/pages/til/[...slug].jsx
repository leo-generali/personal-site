import { join } from "path";
import { Layout, MDX } from "@/components";
import { getTILs, getTILBySlug } from "@/lib/tils";

function Changelog({ changelog }) {
  let changeNumer = changelog.length + 1;

  return (
    <details className="bg-blue-gray-100 text-blue-gray-500 p-2 rounded">
      <summary className="cursor-pointer text-sm font-semibold">
        Changelog
      </summary>
      <ol className="ml-2 mt-2">
        {changelog.map((changedItem) => {
          changeNumer = changeNumer - 1;
          return (
            <li className="text-sm grid grid-cols-[110px,1fr] gap-2">
              <p class="flex justify-between">
                <span className="inline-block font-semibold">
                  #<span className="tabular-nums">{changeNumer}</span>:
                </span>
                <span className="tabular-nums">{changedItem.date}</span> -
              </p>
              <span>{changedItem.changes}</span>
            </li>
          );
        })}
      </ol>
    </details>
  );
}

export default function TilPage({ content, changelog, title, ...params }) {
  const titleWithPrefix = `Today I Learned About: ${title}`;

  return (
    <Layout title={titleWithPrefix}>
      <article>
        <h1 className="leading-tight font-semibold text-4xl mb-4">
          {titleWithPrefix}
        </h1>
        <Changelog changelog={changelog} />
        <section className="flow mt-24">
          <MDX {...content} />
        </section>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const path = join(process.cwd(), "src", "_til", params.slug.join("/"));
  const til = await getTILBySlug(`${path}.mdx`, [
    "content",
    "title",
    "changelog",
  ]);

  return {
    props: {
      changelog: til.changelog,
      content: til.content,
      date: til.date,
      title: til.title,
    },
  };
}

export async function getStaticPaths() {
  const tils = await getTILs(["slug"]);
  const paths = [];

  for (const til of tils) {
    paths.push({
      params: {
        slug: til.slug.split("/"),
      },
    });
  }

  return {
    paths: paths,
    fallback: false,
  };
}

export const config = {
  unstable_runtimeJS: false,
  unstable_JsPreload: false,
};
