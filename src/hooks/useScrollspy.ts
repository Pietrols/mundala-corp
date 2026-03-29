"use client";
// TODO: Step 2 — Returns the id of the section currently in the viewport
// Used by Navbar to highlight the active nav link as the user scrolls
import { useEffect, useState } from "react";

export function useScrollspy(
  sectionIds: string[],
  offset = 80
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
