import { useLayoutEffect } from "react";

const REDIRECT_URL = "https://lexpress.mg/04/09/2020/toujours-au-top-10-du-classement-nos-jeunes-continuent-leur-parcours-dans-la-competition-internationale-de-robotique/";

export default function Project8() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Primary redirect (replaces current history entry)
    try {
      window.location.replace(REDIRECT_URL);
      return;
    } catch {}

    // Fallbacks if replace fails
    try {
      window.location.href = REDIRECT_URL;
      return;
    } catch {}

    // As a last fallback, add a meta refresh tag to the document head
    try {
      const meta = document.createElement("meta");
      meta.httpEquiv = "refresh";
      meta.content = `0;url=${REDIRECT_URL}`;
      document.head.appendChild(meta);
    } catch {}
  }, []);

  // Render nothing (redirect runs immediately)
  return null;
}