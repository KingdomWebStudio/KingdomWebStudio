gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from(".hero h1", {
  y: 50,
  opacity: 0,
  duration: 1
});

gsap.from(".hero p", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

gsap.fromTo(".hero button",
  { opacity: 0, scale: 0.8 },
  { opacity: 1, scale: 1, duration: 0.8, delay: 0.6 }
);

// SCROLL
gsap.utils.toArray("section:not(.hero)").forEach(section => {
  gsap.fromTo(section,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        once: true
      }
    }
  );
});

const tl = gsap.timeline();

tl.from(".hero .logo img", {
  y: -30,
  opacity: 0,
  duration: 0.8
});