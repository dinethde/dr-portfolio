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
