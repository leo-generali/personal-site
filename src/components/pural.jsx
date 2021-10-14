export default function Plural({ count, children, plural }) {
  if (count !== 1) {
    return plural || `${children}s`;
  }

  return children;
}
