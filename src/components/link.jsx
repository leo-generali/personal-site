export default function Link({ href, children }) {
  return (
    <a className="text-indigo-400 hover:text-indigo-600 underline" href={href}>
      {children}
    </a>
  );
}
