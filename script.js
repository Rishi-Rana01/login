tsParticles.load("particles-js", {
  background: {
    color: "#0c0c14", // Match the body's background
  },
  particles: {
    number: {
      value: 120, // Number of particles
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#00ffff", "#ff00ff", "#ffffff"], // Array of radiant colors
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff", // Color of the lines connecting particles
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2, // Speed of particles
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // Particles move away from the cursor
      },
      onclick: {
        enable: true,
        mode: "push", // Adds new particles on click
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100, // How far the particles are repulsed
        duration: 0.4,
      },
      push: {
        particles_nb: 4, // Number of particles to add on click
      },
    },
  },
  detectRetina: true,
});