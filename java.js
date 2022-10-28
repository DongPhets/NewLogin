
let form = document.getElementById("loginForm");
let loginButton = document.getElementById("login");
let loginButton1 = document.getElementById("button");


loginButton.addEventListener("click", (e) =>{
    e.preventDefault();

    let user = form.user.value;
    let password = form.password.value;

    if(user == "christian" && password == "password"){
        popup.classList.add("open-popup");
        }else{
            popup1.classList.add("open-popup1");
        }
})

loginButton1.addEventListener("click", (e) =>{
    e.preventDefault();
    window.location = "home.html"
})

function closeValidation(){
    popup.classList.remove("open-popup");
    popup1.classList.remove("open-popup1");
}

