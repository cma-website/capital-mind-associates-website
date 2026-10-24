
'use client';

import { useEffect, useRef } from 'react';

export default function TimelineReveal({ children }) {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const cards = timeline.querySelectorAll('.timeline-card');

    // Fallback: show cards if IntersectionObserver is unavailable
    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('seen'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const index = Number(card.dataset.index || 0);

            // Reveal cards one by one
            window.setTimeout(() => {
              card.classList.add('seen');
            }, (index % 2) * 180);

            observer.unobserve(card);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px',
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="benefits timeline" ref={timelineRef}>
      {children}
    </div>
  );
}
