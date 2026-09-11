import { useEffect } from "react";
import { useLocation } from "react-router";

//경로가 바뀔 때마다 스크롤을 맨 위로 올림.
const ScrollRestoration = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollRestoration;
