// 이미지 크게보기 체크박스
const imgScale = document.querySelector('.imgScale')

// 그리드
const grid = document.querySelectorAll('.grid')

// 이미지 컬럼 헤더
const imgColumnTh = document.querySelectorAll('.imgColumnTh')
console.log(imgColumnTh)

const bigImg = document.querySelector('.grid table')

// 이미지 크게보기 체크박스 체크박스 토글 시 이미지 컬럼 on/off
imgScale.addEventListener('click', () => {
    grid.forEach((e) => {
        e.classList.toggle('bigImg')
    })
    imgColumnTh.forEach((e) => {
        e.classList.toggle('wide')
    })
    
    let imgSize = document.querySelector('.grid table .imgWrap')
    bigImg.style.minWidth = `${1440 + imgSize.clientWidth}px`
})