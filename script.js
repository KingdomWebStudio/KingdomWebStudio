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

//Particúlas

function createFocusedParticles(selector, amount = 40) {
  const container = document.querySelector(selector);

  for (let i = 0; i < amount; i++) {
    const particle = document.createElement("span");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDuration = (Math.random() * 4 + 4) + "s";
    particle.style.animationDelay = Math.random() * 3 + "s";

    particle.style.opacity = Math.random();

    container.appendChild(particle);
  }
}

// APLICA EM ÁREAS ESPECÍFICAS
createFocusedParticles(".hero .particles-area", 50);
createFocusedParticles(".value .particles-area", 50);
createFocusedParticles(".services .particles-area", 50);
createFocusedParticles(".differentials .particles-area", 50);
createFocusedParticles(".process .particles-area", 50);
createFocusedParticles(".about .particles-area", 50);
createFocusedParticles(".cta .particles-area", 50);