const signup= document.querySelectorAll(".signup");

const pup = document.getElementById("sign-pup");
const btn = document.getElementById("slid-btn");
const nav = document.getElementById("slid-menu");
const close_signup_btn = document.getElementById("close-signup-btn");

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








