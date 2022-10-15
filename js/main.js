const searchEl = document.querySelector('.search');
// searchEl 안에있는 input Element
const searchInputEl = searchEl.querySelector('input');

// search를 클릭하면 input요소에 포커스가 되게 하기 위함
searchEl.addEventListener('click', () => searchInputEl.focus());

// searchInputEl 포커스가 되면
searchInputEl.addEventListener('focus', () => {
  // searchInputEl이 포커스되면 searchEl에 'focused'라는 클래스를 추가하겠다.
  searchEl.classList.add('focused');
  // searchInputEl에 속성을 추가한다. placeholder에 '통합검색'이라는 단어를
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// searchInputEl 포커스가 blur(해제)되면
searchInputEl.addEventListener('blur', () => {
  // searchInputEl이 포커스되면 searchEl에 'focused'라는 클래스를 제거하겠다.
  searchEl.classList.remove('focused');
  // searchInputEl에 속성을 추가한다. placeholder에 ''이라는 단어를
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// // 브라우저 자체(화면 자체)
// window.addEventListener(
//   'scroll',
//   // 0.3초마다 스크롤 진행
//   _.throttle(() => {
//     console.log('scroll!');
//   }, 300)
// );

// _.throttle() 함수는 lodash를 설치해야한다.
window.addEventListener(
  'scroll',
  _.throttle(() => {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap 라이브러리 설치 필요(자바스크립트 애니메이션 처리 라이브러리)
      // gsap.to(요소, 지속시간, 옵션);
      // opacity 속성처럼 값을 숫자로 입력하는 속성들은 전환효과를 통해 요소 전/후 상태를
      // 중간 숫자의 값으로 자연스럽게 만들어줄 수 있지만 display 속성처럼 값이 숫자가 이난 속성은 전/후 상태의 중간 값이 존재하지 않기 떄문에 자연스러운 전환효과를 적용할 수 없습니다.
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      });
    } else {
      // 배지 나타내기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300)
);

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7s 1.4s 2.1s 2.7s
    opacity: 1,
  });
});

// swiper
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 세로로
  autoplay: true, // 자동재생
  loop: true, // 반복재생
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', 기본값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복 재생
  autoplay: {
    delay: 5000, // 5초 딜레이(기본값은 3초)
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next', // 다음 버튼 선택자
  },
});
