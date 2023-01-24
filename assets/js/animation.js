gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({ ease: "power4.inOut" });

tl.to('.navbar__links li', { stagger: .2, y: 0, opacity: 1, duration: .5 })
tl.to('.hero__intro *', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', stagger: .2, y: 0, opacity: 1, duration: 1 }, '-=1');
tl.to('.hero__scroll', { y: 0, opacity: 1, duration: .8 }, '-=1.2')

gsap.to('.intro div', {
  scrollTrigger: {
    trigger: '.intro',
    end: 'top',
    scrub: 1
  },
  stagger: .2,
  x: 0,
  opacity: 1
});

gsap.to('.projects__project--right', {
  scrollTrigger: {
    trigger: '.projects__project--right',
    end: 'center center',
    scrub: 1
  },
  x: 0,
  opacity: 1,
  duration: 1
});

gsap.to('.projects__project--left', {
  scrollTrigger: {
    trigger: '.projects__project--left',
    end: 'center center',
    scrub: 1
  },
  x: 0,
  opacity: 1,
});

gsap.to('.skills-switch', {
  scrollTrigger: {
    trigger: '.skills-switch',
    end: 'center center',
    scrub: 1
  },
  y: 0,
  opacity: 1,
});
