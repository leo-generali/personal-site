import { NAV } from "@/constants";
import { Link } from "@/components";

export default function Layout({ children }) {
  return (
    <>
      <nav class="container w-full mx-auto mt-12 mb-32 px-6 md:px-10">
        <ul class="flex">
          {NAV.map((link, index) => {
            return (
              <li className={index === 0 ? "mr-auto" : "mr-2"}>
                <Link href={link.slug}>{link.anchor}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <main class="container w-full mx-auto flex-grow px-6 md:px-10">
        {children}
      </main>
      <footer class="container w-full mx-auto mt-32 pb-8 px-6 md:px-10">
        <p class="text-xs">
          Powered by <Link href="https://nextjs.org/">NextJS</Link> and{" "}
          <Link href="https://tailwindcss.com/">TailwindCSS</Link>
        </p>
      </footer>
    </>
  );
}
