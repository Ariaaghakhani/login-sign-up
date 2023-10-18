let flag = 1

document.getElementsByClassName('new')[0].addEventListener('click', () => {
    document.getElementsByClassName('curtain')[0].style.animationName = 'hover2'
    flag++
    if (flag % 2 == 0) {
        setTimeout(() => {
            document.getElementsByClassName('inp')[0].style.visibility = 'hidden'
            document.getElementsByClassName('inp')[0].style.display = 'none'
            document.getElementsByClassName('inp2')[0].style.visibility = 'visible'
            document.getElementsByClassName('inp2')[0].style.display = 'block'
        }, 1600);
    } else {
        setTimeout(() => {
            document.getElementsByClassName('inp')[0].style.visibility = 'visible'
            document.getElementsByClassName('inp')[0].style.display = 'block'
            document.getElementsByClassName('inp2')[0].style.visibility = 'hidden'
            document.getElementsByClassName('inp2')[0].style.display = 'none'
        }, 1000);
    }
})


document.getElementsByClassName('new')[1].addEventListener('click', ()=>{
    document.getElementsByClassName('curtain')[0].style.animationName = 'hover'
    flag++
    if (flag % 2 == 0) {
        setTimeout(() => {
            document.getElementsByClassName('inp')[0].style.visibility = 'hidden'
            document.getElementsByClassName('inp')[0].style.display = 'none'
            document.getElementsByClassName('inp2')[0].style.visibility = 'visible'
            document.getElementsByClassName('inp2')[0].style.display = 'block'
        }, 1600);
    } else {
        setTimeout(() => {
            document.getElementsByClassName('inp')[0].style.visibility = 'visible'
            document.getElementsByClassName('inp')[0].style.display = 'block'
            document.getElementsByClassName('inp2')[0].style.visibility = 'hidden'
            document.getElementsByClassName('inp2')[0].style.display = 'none'
        }, 1000);
    }
})

