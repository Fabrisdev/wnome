import { useRef, useState } from "react";

export function useUrl(initialUrl: string) {
  const [url, setUrl] = useState(initialUrl);
  const history = useRef([initialUrl]);
  const index = useRef(0);

  const canGoNext = history.current.length > index.current + 1;
  const canGoBack = index.current > 0;

  function updateUrl(url: string) {
    history.current = history.current.slice(0, index.current + 1);
    history.current.push(url);
    index.current += 1;
    setUrl(url);
    console.log(history.current);
  }

  function goBack() {
    if (!canGoBack) return;
    index.current -= 1;
    setUrl(history.current[index.current]);
  }

  function goNext() {
    if (!canGoNext) return;
    index.current += 1;
    setUrl(history.current[index.current]);
  }

  return { url, updateUrl, goBack, goNext, canGoBack, canGoNext };
}
