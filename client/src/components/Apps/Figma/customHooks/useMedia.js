import { useState, useEffect } from "react";

const useMedia = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    let media = window.matchMedia(query);
    if (media.matches !== matches) return setMatches(media.matches);
    let listener = () => setMatches(media.matches);
    const eventListener = media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", eventListener);
    };
  }, [query]);

  return matches;
};

export default useMedia;
