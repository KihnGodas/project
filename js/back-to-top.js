document.querySelector(".top").innerHTML = `<button onclick="backToTop()"><i class='bx bx-up-arrow-alt'></i></button>`
function backToTop(){
    window.scrollTo({
       top : 0,
       behavior: "smooth"
    })
}
