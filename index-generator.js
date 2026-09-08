const str = "**When to use below hooks and when to not: `useMemo` , `useCallback` , `useContext`**";

const slug = str
  .replace(/\*\*/g, "")
  .replace(/`/g, "")
  .replace(/,/g, "")
  .replace(/:/g, "")
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "-");

console.log(slug);