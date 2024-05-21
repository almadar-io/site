import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";

const [visibleIndex, setVisibleIndex] = useState(0);
const [inProp, setInProp] = useState(false);
const words = [
  "Harness the power of AI to build scalable, robust applications.",
  "Our developer-first approach ensures you get top-tier, efficient solutions.",
  "Transform your ideas into reality with our cutting-edge technology.",
  "Partner with Markab and experience unparalleled innovation and scalability.",
];
const transitionStyles = {
  entering: { opacity: 0, display: "none" },
  entered: { opacity: 1, display: "inline" },
  exiting: { opacity: 0, display: "none" },
  exited: { opacity: 0, display: "none" },
};

const DURATION = 80;

useEffect(() => {
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  setTimeout(() => setInProp(true), 100);
  const timer = setTimeout(
    () => incrementWord(),
    DURATION * (words[visibleIndex].split("").length - 1) + 1000
  );

  return () => clearTimeout(timer);
}, [visibleIndex]);

const incrementWord = () => {
  setInProp(false);
  setTimeout(() => setInProp(true), 100);
  setVisibleIndex(visibleIndex === words.length - 1 ? 0 : visibleIndex + 1);
};

const characters = words[visibleIndex].split("");
const classes = useStyles();

{
  /* <div>
        {characters.map((char, index) => {
          const duration = DURATION * index;
          const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
          };
          return (
            <Fade
              key={index}
              onState={(state) => {
                index === characters.length - 1 && state === "entered";
              }}
              defaultStyle={defaultStyle}
              duration={duration}
              transitionStyles={transitionStyles}
              in={inProp}
            >
              {char}
            </Fade>
          );
        })}
      </div> */
}

const Fade = ({
  in: inProp,
  children,
  transitionStyles,
  defaultStyle,
  duration,
  onState,
}) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => {
      onState(state);
      return (
        <span
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </span>
      );
    }}
  </Transition>
);