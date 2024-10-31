const leafeImg = document.querySelector(".leaf-image");
const animatedImg = document.querySelector(".animated-leaf-image");
const animatedImgWrapper = document.querySelector(".footer-animated-image-AM");
const noLinkImageWrapper = document.querySelector(".no_link_image_wrapper");

animatedImgWrapper.addEventListener("mouseover", function () {
  leafeImg.style.opacity = "0";
  animatedImg.style.opacity = "100";
});

animatedImgWrapper.addEventListener("mouseout", function () {
  leafeImg.style.opacity = "100";
  animatedImg.style.opacity = "0";
});

// Scroll triger for cards
gsap.registerPlugin(ScrollTrigger);

const createScroll01 = () => {
  // const panels = Array.from(document.querySelectorAll(".card-wrapper-p"));
  // panels.forEach((panel, index) => {
  //   const isLast = index === panels.length - 1;
  //   console.log(isLast);
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: panel,
  //         start: "top center",
  //         scrub: 1,
  //         markers: true,
  //         pin: true,
  //       },
  //     })
  //     // Animate panel
  //     .to(
  //       panel,
  //       {
  //         ease: "none",
  //         startAt: { filter: "brightness(100%) blur(0px)" },
  //         filter: isLast ? "none" : "brightness(50%) blur(10px)",
  //         scale: 0.9,
  //         borderRadius: 40,
  //       },
  //       "<"
  //     );
  // });
};

document.addEventListener("DOMContentLoaded", () => {
  createScroll01();
});
