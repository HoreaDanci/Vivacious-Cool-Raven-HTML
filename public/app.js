particlesJS("particles-js", {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 450,
      },
    },
    color: {
      value: "#7D177D",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#012B79",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
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
        speed: 100,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#7D177D",
      opacity: 0.8,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 20,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  config_demo: {
    hide_card: false,
    background_color: "#b61924",
    background_image: "",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover",
  },
});

// particlesJS('particles-js', {
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         value_area: 400
//       }
//     },
//     color: {
//       value: '#012B79'
//     },
//     shape: {
//       type: 'triangle',
//       stroke: {
//         width: 0,
//         color: '#000000'
//       },
//       polygon: {
//         nb_sides: 5
//       },
//       image: {
//         src: 'img/github.svg',
//         width: 100,
//         height: 100
//       }
//     },
//     opacity: {
//       value: 0.5,
//       random: true,
//       anim: {
//         enable: false,
//         speed: 1,
//         opacity_min: 0.1,
//         sync: false
//       }
//     },
//     size: {
//       value: 5,
//       random: true,
//       anim: {
//         enable: false,
//         speed: 40,
//         size_min: 0.1,
//         sync: false
//       }
//     },
//     line_linked: {
//       enable: true,
//       distance: 250,
//       color: '#4AC8FF',
//       opacity: 0.4,
//       width: 1
//     },
//     move: {
//       enable: true,
//       speed: 6,
//       direction: 'none',
//       random: false,
//       straight: false,
//       out_mode: 'out',
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200
//       }
//     }
//   },
//   interactivity: {
//     detect_on: 'window',
//     events: {
//       onhover: {
//         enable: true,
//         mode: ['bubble', 'grab']
//       },
//       onclick: {
//         enable: true,
//         mode: 'push'
//       },
//       resize: false
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         line_linked: {
//           opacity: 1
//         }
//       },
//       bubble: {
//         distance: 400,
//         size: 15,
//         duration: 2,
//         opacity: 8,
//         speed: 3
//       },
//       repulse: {
//         distance: 100
//       },
//       push: {
//         particles_nb: 4
//       },
//       remove: {
//         particles_nb: 2
//       }
//     }
//   },
//   retina_detect: true
// });
