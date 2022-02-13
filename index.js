const loginBtn = document.querySelectorAll(".signin");
const createAccBtn = document.querySelectorAll(".signup");
const modalCloseBtn = document.querySelectorAll(".close-btn-modal");


const showLoginModal = ()=> {
    document.querySelector(".signin-modal").classList.remove("hide");
    document.querySelector(".signup-modal-one").classList.add("hide");
}

const showSignupModal = ()=> {
    document.querySelector(".signup-modal-one").classList.remove("hide");
    document.querySelector(".signin-modal").classList.add("hide");
}

const closeAllModal = ()=> {
    document.querySelector(".signup-modal-one").classList.add("hide");
    document.querySelector(".signin-modal").classList.add("hide");
}

loginBtn.forEach(btn=>btn.addEventListener("click",showLoginModal));

createAccBtn.forEach(btn=>btn.addEventListener("click",showSignupModal));

modalCloseBtn.forEach(btn=>btn.addEventListener("click",closeAllModal));