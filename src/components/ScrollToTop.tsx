import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top of the page on every route change.
 * - Preserves in-page anchor navigation (hash links) — those scroll to the target.
 * - Respects prefers-reduced-motion (uses "auto" instead of "smooth").
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to an in-page anchor, let the browser (or the anchor
    // click handler) resolve it — do not force scroll to top.
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
        return;
      }
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, left: 0, behavior: prefersReduced ? "auto" : "smooth" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
