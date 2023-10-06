const slide = document.querySelector("#slider");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
let currentPosition = 0;

// 버튼 클릭시 작동하는 이벤트
function prev() {
  currentPosition += 700;
  slide.style.transform = `translateX(${currentPosition}px)`;
}
function next() {
  currentPosition -= 700;
  slide.style.transform = `translateX(${currentPosition}px)`;
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

/* const slideItem = document.querySelectorAll("#slider li");

function autoSlide() {
  let i = 0;
  prevBtn.addEventListener("click", () => {
    slideItem[i].classList.remove("active");
    i--;
    i < 0 ? (i = slideItem.length - 1) : false;
    slideItem[i].classList.add("active");
  });
} */
