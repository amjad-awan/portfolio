import { RefObject } from "react";

type ViewProps = {
  cardRef: RefObject<HTMLElement>;
  index: number;
  styles: string;
};
export const isInViewPort = ({ cardRef, index = 0, styles }: ViewProps) => {
  const cardElement = cardRef.current;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && cardElement) {
          cardElement.style.animationDelay = `${index * 0.1}s`; 
          entry.target.classList.add(styles);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  ); 
  if (cardElement) {
    observer.observe(cardElement);
  }

  return () => {
    if (cardElement) {
      observer.unobserve(cardElement);
    }
  };
};
