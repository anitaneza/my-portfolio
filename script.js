const menu = document.querySelector('.menu');
const toggle =document.getElementById('toggle');

toggle.addEventListener('click', function(){
    menu.classList.toggle('active');
})

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    let scroll = this.window.scrollY;
    if(scroll > 100){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
})

window.onload = function(){
    new Splide('.Mysplide',{
        type:'loop',
        drag:'free',
        focus:'center',
        perPage:2.5,
        gap:'2rem',
        pagination:false,
        breakpoints:{
            1400:{
                perPage:2
            },
            1200:{
                perPage:1.5
            },
            500:{
                perPage:1
            }
        }
    }).mount({ AutoScroll : window.splide.Extensions.AutoScroll})
}