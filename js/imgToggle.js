// 이미지 표시 체크박스
const imgToggle = document.querySelector('.imgToggle')

// 이미지 컬럼
const imgColumn = document.querySelectorAll('.imgColumn')

// 이미지 표시 체크박스 토글 시 이미지 컬럼 on/off
imgToggle.addEventListener('click', () => {
    imgColumn.forEach((e) => {
        e.classList.toggle('on')
    })
})