var lastScrollTop;
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll',function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        var navbarHight = Number.parseInt(getComputedStyle(navbar).height)
        navbar.style.top= -Number(navbarHight+10)+'px'
        // close the list too
    }
    else{
    navbar.style.top='0';
    }
    lastScrollTop = scrollTop;
});
let landingfood = document.querySelector(".landing img")
let i =1
setInterval(function(){
    if(i === 1){
        landingfood.src = `/static/imgs/landingfood${i}.png`
        // landingfood.style.animation = ""
        i++
    }
    else if(i ===2){
        landingfood.src = `/static/imgs/landingfood${i}.png`
        // landingfood.style.animation = ""
        i++
    }
    else{
        landingfood.src = `/static/imgs/landingfood${i}.png`
        // landingfood.style.animation = "fading 2s"
        i = 1
    }
},10000)
console.log("test")
