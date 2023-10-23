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
        }, 1600);
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
        }, 1200);
    } else {
        setTimeout(() => {
            document.getElementsByClassName('inp')[0].style.visibility = 'visible'
            document.getElementsByClassName('inp')[0].style.display = 'block'
            document.getElementsByClassName('inp2')[0].style.visibility = 'hidden'
            document.getElementsByClassName('inp2')[0].style.display = 'none'
        }, 1600);
    }
})


// Form Validation

let _email = document.querySelectorAll('input#email')
let logStatus = false
let signStatus = false
let logPass = false
let signPass = false

let _pass = document.querySelectorAll('input#password')
let con1 = false
let con2 = false
let con3 = false
let con4 = false

_pass[1].addEventListener('input',(e)=>{
    if(e.target.value.length>=8){
        con1=true
    }
    if(e.target.value.search('\d')){
        con2=true
    }
    if(e.target.value.search('[A-Z]')){
        con3=true
    }
    if(e.target.value.search('[!@#$%^&*-=+]')){
        con4=true
    }


    if(con1 && con2 && con3 && con4){
        _pass[1].style.border='1px solid green'
        signPass=true
    }else{
        // alert("Password is not strong enough ! Try something else.")
        _pass[1].style.border='1px solid red'
        signPass=false
    }
})



_email[0].addEventListener('input',(e)=>{
    if(e.target.value.search('[^@ \t\r\n]+@[^@ \s\t\r\n]+.\.[^@ \s\t\r\n]*')){   
        _email[0].style.border='1px solid red'
        logStatus=false
        
    }else{
        _email[0].style.border='1px solid green'
        logStatus=true
    }
})
_email[1].addEventListener('input',(e)=>{
    if(e.target.value.search('[^@ \t\r\n]+@[^@ \s\t\r\n]+.\.[^@ \s\t\r\n]*')){   
        _email[1].style.border='1px solid red'
        signStatus=false

    }else{
        _email[1].style.border='1px solid green'
        signStatus=true
    }
})

document.querySelectorAll('.btn')[0].addEventListener('click',()=>{
    if(logStatus){
        if(logPass){
            document.querySelectorAll('.btn a')[0].setAttribute('href','index2.html')
        }else{
            alert("Password is incorrect")
        }
    } else{
        alert("Please enter the correct email format")
    }
})


document.querySelectorAll('.btn2')[0].addEventListener('click',()=>{
    if(signStatus){
        if(signPass){
        document.querySelectorAll('.btn2 a')[0].setAttribute('href','index3.html')}
        else{
            alert("Password must contain at least 8 characters, including uppercase and lowercase letters.")
        }
    }else{
        alert("Please enter the correct email format")
    }
})


