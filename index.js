const slideItem = document.querySelector("#slider");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
let currentPosition = 0;

// ul자체의 위치가 이동하여 움직이는 슬라이드
// 버튼 클릭시 작동하는 이벤트
// currentPosition 값을 보고 좌우 최대치일 경우 버튼 이벤트 비활성화
function prev() {
  currentPosition += 700;
  slideItem.style.transform = `translateX(${currentPosition}px)`;
  if (currentPosition === 0) {
    prevBtn.removeEventListener("click", prev);
  }
}
function next() {
  currentPosition -= 700;
  slideItem.style.transform = `translateX(${currentPosition}px)`;
  if (currentPosition <= -2100) {
    nextBtn.removeEventListener("click", next);
  }
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

// const slideItem = document.querySelectorAll("#slider li");

/* function autoSlide() {
  let i = 0;
  // 이전버튼 클릭시
  prevBtn.addEventListener("click", () => {
    slideItem[i].classList.remove("active");
    i--;
    i < 0 ? (i = slideItem.length - 1) : false;
    slideItem[i].classList.add("active");
  });
  // 다음버튼 클릭시
  nextBtn.addEventListener("click", () => {
    slideItem[i].classList.remove("active");
    i++;
    if (i >= slideItem.length) {
      i = 0;
    }
    slideItem[i].classList.add("active");
  });
}

setInterval(function () {
  nextBtn.click();
}, 3000);
 */
