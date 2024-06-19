"use client";

import { isInViewPort } from "@/helpers/isInViewPort";
import React, {
  useEffect,
  useRef,
  ReactNode,
  ElementType,
} from "react";
import styles from "./style.module.scss";

interface AnimatedItemProps {
  el: ElementType;
  children: ReactNode;
  cls: string;
  index?: number;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  el: Component,
  children,
  index,
  cls,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unobserve = isInViewPort({
      cardRef: wrapperRef,
      index: 0,
      styles: styles.animateFadeSlide,
    });

    return () => {
      if (typeof unobserve === "function") unobserve();
    };
  }, []);

  return React.cloneElement(
    <Component ref={wrapperRef} className={cls}>
      {children}
    </Component>
  );
};

export default AnimatedItem;
