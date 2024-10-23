var sidenav = document.querySelector(".slidebar")

function show(){
    sidenav.style.left = "0"
}


function hide(){
    sidenav.style.left = "-60%"
}



const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



