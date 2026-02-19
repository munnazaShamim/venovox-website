"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Ignore tiny scroll jitters (important on mobile)
        if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
          if (currentScrollY > lastScrollY.current) {
            setVisible(false); // scrolling down
          } else {
            setVisible(true); // scrolling up
          }

          lastScrollY.current = currentScrollY;
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        aria-label="Chat on WhatsApp"
        className={`whatsapp-fab ${visible ? "show" : "hide"}`}
        onClick={() => window.open("https://wa.me/60128008888", "_blank")}
      >
        <img src="/voxy.png" alt="" />
      </button>

      <style jsx>{`
        .whatsapp-fab {
          position: fixed;
          bottom: calc(30px + env(safe-area-inset-bottom));
          right: calc(16px + env(safe-area-inset-right));
          width: 150px;
          height: 150px;
          border-radius: 50%;
          padding: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          z-index: 1000;

          transition: opacity 0.25s ease, transform 0.25s ease;
          will-change: transform, opacity;
        }

        .whatsapp-fab img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .show {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }

        .hide {
          opacity: 0;
          transform: scale(0.9);
          pointer-events: none;
        }

        /* Tablet / Desktop */
        @media (min-width: 768px) {
          .whatsapp-fab {
            width: 180px;
            height: 180px;
          }
        }
      `}</style>
    </>
  );
}
