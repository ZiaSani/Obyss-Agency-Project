function loaderAnimations() {
  gsap.from(".loader-text h1", {
    opacity: 0,
    y: 150,
    stagger: 0.2,
    ease: "sine.out",
  });
  gsap.from(".loader-counter , .loader-text h2", {
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "sine.in",
    onStart: function () {
      const counterText = document.querySelector(".loader-counter h4");
      let counter = "";

      let CounterInterval = setInterval(function () {
        if (counter < 100) {
          counter++;
          counterText.textContent = counter;
        } else {
          clearInterval(CounterInterval);
          gsap.to(".loader-counter", {
            opacity: 0,
            duration: 0.8,
            delay: 0.4,
            ease: "sine.out",
          });
        }
      }, 30);
    },
  });

  const tl = gsap.timeline({ delay: 3.9 });

  tl.to(
    ".loader-text h1",
    {
      opacity: 0,
      stagger: 0.28,
      ease: "sine.out",
    },
    "same"
  )
    .to(
      ".loader-counter h2",
      {
        opacity: 0,
        ease: "sine.out",
        delay: -1,
      },
      "same"
    )
    .to(".loader", {
      opacity: 0,
      display: "none",
      duration: 0.8,
    })
    .from(".page01", {
      y: 1200,
      opacity: 0,
      duration: 1.5,
      delay: 0.15,
      ease: "power4.inOut",
    });
}
loaderAnimations();
// Include GSAP in your project first
gsap.to(".loader-text h2", {
  keyframes: [
    {
      duration: 0.4, // Adjust as needed (equivalent to the percentage of your animation timeline)
      fontFamily: "Plain Light",
      webkitTextStroke: "1px var(--text-color)",
      color: "var(--text-color)",
      opacity: 1,
      fontWeight: 400,
    },
    {
      duration: 0.4, // Adjust as needed
      fontFamily: "Plain Light",
      webkitTextStroke: "1px var(--text-color)",
      color: "var(--text-color)",
      opacity: 0,
      fontWeight: 400,
    },
    {
      duration: 0.4, // Adjust as needed
      fontFamily: "silk serif",
      fontWeight: 100,
      webkitTextStroke: "1px var(--text-color)",
      color: "transparent",
      opacity: 1,
    },
    {
      duration: 0.4, // Adjust as needed
      fontFamily: "silk serif",
      fontWeight: 100,
      webkitTextStroke: "1px var(--text-color)",
      color: "transparent",
      opacity: 0,
    },
  ],
  repeat: -1, // Add for infinite looping
});
