import { MDXRemote } from "next-mdx-remote";
import hljs from "highlight.js";
import allComponents, { Link } from "@/components";

const LANGUAGE_MAP = {
  css: "CSS",
  javascript: "JavaScript",
  json: "JSON",
  typescript: "TypeScript",
};

function Code({ children, className }) {
  if (!className) {
    return <code className="hljs text-sm rounded-lg px-2 py-1">{children}</code>;
  }

  const language = className.replace("language-", "");

  return (
    <code
      className="code-block hljs text-sm rounded-lg relative"
      data-language={LANGUAGE_MAP[language]}
      dangerouslySetInnerHTML={{
        __html: hljs.highlight(children, { language }, true).value,
      }}
    />
  );
}

const components = {
  ...allComponents,
  a: ({ children, href }) => <Link href={href}>{children}</Link>,
  code: (props) => <Code {...props} />,
  inlineCode: (props) => <Code {...props} />,
};

export default function MDX({ ...params }) {
  return <MDXRemote {...params} components={components} />;
}
