// Garantir que GSAP carregou
console.log("JS carregou");
console.log(gsap);

// Registrar plugin
gsap.registerPlugin(ScrollTrigger);


// 🎬 HERO (sem bug agora)

// Título
gsap.from(".hero h1", {
    y: 50,
    opacity: 0,
    duration: 1,
});

// Texto
gsap.from(".hero p", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
});

// BOTÃO (CORRIGIDO com fromTo)
gsap.fromTo(".hero button",
    {
        opacity: 0,
        scale: 0.8
    },
    {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.6
    }
);


// 🎯 SCROLL (CORRIGIDO com fromTo)

gsap.utils.toArray("section:not(.hero)").forEach(section => {
    gsap.fromTo(section,
        {
            opacity: 0,
            y: 60
        },
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

gsap.to(".gold-line", {
  width: "80%",
  duration: 1.5,
  scrollTrigger: {
    trigger: ".gold-line",
    start: "top 80%"
  }
});