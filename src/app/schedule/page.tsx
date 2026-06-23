"use client";

import { useEffect, useRef } from "react";

export default function SchedulePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function init() {
      if (window.Calendly && container) {
        container.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/tafora-technology/new-meeting",
          parentElement: container,
        });
      }
    }

    if (window.Calendly) {
      init();
    } else {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = init;
      document.head.appendChild(script);
    }
  }, []);

  return (
    // Full-screen overlay — sits above the navbar (z-50) and footer so the
    // scheduler takes over the tab, matching the tafora-landing-page behaviour.
    <main
      className="fixed inset-0 z-[100] flex flex-col"
      style={{ background: "#ffffff" }}
    >
      <div ref={containerRef} className="min-h-0 w-full flex-1" />
    </main>
  );
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}
