const signup= document.querySelectorAll(".signup");
const viking = document.getElementById("auto-header");

const pup = document.getElementById("sign-pup");
const btn = document.getElementById("slid-btn");
const nav = document.getElementById("slid-menu");
const close_signup_btn = document.getElementById("close-signup-btn");

const text = "All your files in once secure location,   accessible anywhere.";
let index = 0;


function autoWrite () {

    viking.textContent = text.slice(0,index);

    index++;

}

setInterval(autoWrite,80);

for(let i=0;i<signup.length;i++){
        
    signup[i].addEventListener("click",function () {

        pup.classList.add("active");

    });
}




close_signup_btn.addEventListener("click",function () {

    pup.classList.remove("active")

});


btn.addEventListener("click", function () {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
    
});








