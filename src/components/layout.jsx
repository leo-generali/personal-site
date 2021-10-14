import Head from "next/head";
import { useRouter } from "next/router";
import { NAV } from "@/constants";
import { Link } from "@/components";

const DOMAIN = "https://leogenerali.com";

export default function Layout({ children, title, description }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title ? `${title} | Leo Generali` : `Leo Generali`}</title>
        <link rel="canonical" href={DOMAIN + router.pathname} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />

        {/* Twitter */}
        <meta name="twitter:title" content="Leo Generali" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@itsleeohgee" />

        {/* Open Graph */}
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Leo Generali" />
        <meta property="og:title" content="Leo Generali" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={DOMAIN + router.pathname} />
      </Head>
      <nav className="container w-full mx-auto mt-12 mb-32 px-6 md:px-10">
        <ul className="flex">
          {NAV.map((link, index) => {
            return (
              <li key={link.slug} className={index === 0 ? "mr-auto" : "mr-2"}>
                {link.icon && <span className="mr-2">{link.icon}</span>}
                <Link href={link.slug}>{link.anchor}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <main className="container w-full mx-auto flex-grow px-6 md:px-10">
        {children}
      </main>
      <footer className="container w-full mx-auto mt-32 pb-8 px-6 md:px-10">
        <p className="text-xs">
          Powered by <Link href="https://nextjs.org/">NextJS</Link> and{" "}
          <Link href="https://tailwindcss.com/">TailwindCSS</Link>
        </p>
      </footer>
    </>
  );
}
