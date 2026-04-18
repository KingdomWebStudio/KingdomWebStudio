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

function createParticles(sectionSelector, amount = 40) {
  const container = document.querySelector(sectionSelector + " .particles");

  for (let i = 0; i < amount; i++) {
    const particle = document.createElement("span");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDuration = (Math.random() * 5 + 5) + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";

    particle.style.opacity = Math.random();

    container.appendChild(particle);
  }
}

// APLICAR ONDE QUER
createParticles(".hero", 60);
createParticles(".value", 30);
createParticles(".services", 60);
createParticles(".differentials", 60);
createParticles(".process", 60);
createParticles(".about", 60);
createParticles(".cta", 50);