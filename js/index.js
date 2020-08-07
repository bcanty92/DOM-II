// Your code goes here
//navbar 
function navLink(child, text, text2){
    let navBar = document.querySelector('.nav-link:nth-child(' + child + ')');

// mouseover 1
navBar.addEventListener('mouseover', () => {
    navBar.style.color = 'violet';
});
// mouseleave 2
navBar.addEventListener('mouseleave', () => {
    navBar.style.color = 'BLACK';
})
// mouseenter 3
navBar.addEventListener('mouseenter', () => {
    navBar.textContent = text;
})
// mouseout 4
navBar.addEventListener('mouseout', () => {
    navBar.textContent = text2;
})

navBar.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault(); // preventDefault()
  });
}
let navBar1 = navLink('1', 'Hello', 'Home');
let navBar2 = navLink('2', 'There', 'About');
let navBar3 = navLink('3', 'Buddy', 'Blog'); 
let navBar4 = navLink('4', 'Welcome', 'Contact');

//click 5
let logo = document.querySelector('.logo-heading');
    logo.addEventListener('click', (event) => {
        logo.style.transform = "rotate(360deg)";
        logo.style.transition = "transform 1s";
    })
//dblclick 6
logo.addEventListener('dblclick', (event) => {
    logo.style.transform = "scale(1.3)";
})

//scroll 7

window.addEventListener('scroll', () => {
    document.querySelector('body').style.color = "hotpink";
})

//keydown 8
window.addEventListener('keydown', () => {
    document.querySelector('html').textContent = "You broke the site";
    document.querySelector('html').style.fontSize = "15em"
    document.querySelector('html').style.color = "red"
    document.querySelector('html').style.backgroundColor = "black"
})

//resize 9
window.addEventListener('resize', () => {
    document.querySelector('html').style.fontSize = "2.5em"
})

//load 10
window.addEventListener('load', () => {
    document.querySelector('html').style.transform = "rotate(360deg)";
    document.querySelector('html').style.transition = "transform 5s";
})