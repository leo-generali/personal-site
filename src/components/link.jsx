export default function Link({ href, children }) {
  return (
    <a className="cursor-pointer border-b-2 border-indigo-400 text-indigo-400 hover:text-indigo-600 hover:border-indigo-600" href={href}>
      {children}
    </a>
  );
}
