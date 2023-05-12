const toggleBtn = document.querySelector(".btn");
const body = document.querySelector("body");


if (localStorage.getItem('isDark') == null) {
    localStorage.setItem('isDark',false);
}

let isDark = JSON.parse(localStorage.getItem('isDark'))

setTheme(isDark)


toggleBtn.addEventListener('click',()=>{

    const _isDark = !JSON.parse(localStorage.getItem('isDark'));
    localStorage.setItem('isDark', _isDark)
    setTheme(_isDark)

})

function setTheme(isDark){
    if(isDark){
        body.style.background = 'black';
        body.style.color = 'white';
    }
    else{
        body.style.background = 'white';
        body.style.color = 'black';
    }
}