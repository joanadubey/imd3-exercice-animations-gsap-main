import animations from "./animations";
import scrollTriggerFunc from "./scroll-trigger";
import timelineExercices from "./timeline";
import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  animations();
  timelineExercices();
  scrollTriggerFunc();
});

gsap.to("#js-exercise-1", { x: 100, duration: 2 });
gsap.to("#js-exercise-2", {
  rotation: 45,
  duration: 2,
  delay: 2,
});
gsap.to("#js-exercise-3", {
  scale: 0.75,
  opacity: 0.5,
  duration: 2,
  delay: 1,
});
gsap.from("#js-exercise-4", {
  scale: 0.75,
  opacity: 0.5,
  duration: 2,
  delay: 1,
});

const tl = gsap.timeline();

tl.to("#js-exercise-5", { x: -100, duration: 3 });

tl.to("#js-exercise-5", { rotation: 45, duration: 2, delay: 1 });

tl.to("#js-exercise-5", { y: -100, duration: 2, delay: 1 });

gsap.from("#js-exercise-6", {
  y: 100,
  duration: 3,
});
gsap.from("#js-exercise-6", {
  scale: 0.75,
  duration: 5,
});
gsap.to("#js-exercise-7", {
  rotation: 45,
  repeat: -1,
  ease: "elastic.out",
  duration: 2,
});
