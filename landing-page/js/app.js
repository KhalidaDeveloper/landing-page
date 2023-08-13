/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const menu = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
console.log(sections);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/*<li><a class='menu__link' href="#section1">section1</a></li>
<li><a class='menu__link' href="#section2">section2</a></li>
<li><a class='menu__link' href="#section3">section3</a></li>
<li><a class='menu__link' href="#section4">section4</a></li>
*/

// 1- build NavBar Menu List
function buildNavbar(){
   const list = document.createElement('li');
 const link = document.createElement('a');
    for(let section of sections){
        console.log("section",section)
        link.setAttribute('href',`${section.id}`);
        console.log("link",link)
        link.textContent=section.id;
        console.log("link",link)
        link.classList.add('menu__link');
        console.log("link",link)
        list.appendChild(link);
        console.log("list",list)
        menu.appendChild(list);
        console.log("menu",menu)
       
       /*  for(let section of sections){
            menu.innerHTML +=`<li><a class='menu__link' href='#${section.id}'>${section.id}</a></li>`;
    */ }
}
 





 // 2- get section offset // add active class  //add active class to its menu

function addActiveClass(){
    sections.forEach(section => {
    console.log(`${section.id}`, section.getBoundingClientRect().top)
    if(window.scrollY > (section.getBoundingClientRect().top + window.scrollY)&& window.scrollY < (section.getBoundingClientRect().bottom + window.scrollY)){
 section.classList.add("your-active-class");
 document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.add("active");

    }else {
        section.classList.remove("your-active-class");
 document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.remove("active");

    }
        
})


}
 // 3-  smooth scroll to section
 function smoothScroll(){
    menu.querySelectorAll('.menu__link').forEach(anchor=>{
    anchor.addEventListener('click', function (e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
 }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNavbar();

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll',addActiveClass);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
smoothScroll();
// Set sections as active


