let BeLogin = document.getElementById('BeLogin');
let formWrapper = document.querySelector('.formWrapper');
let SignUp = document.getElementById('beSignup');
let secondFormWrapper = document.querySelector('.SecondformWrapper');
let mainContainer = document.querySelector('.container')

BeLogin.addEventListener('click', function(){
  formWrapper.classList.toggle('Login-page');
  secondFormWrapper.classList.remove('Signup-page');
  mainContainer.classList.toggle('displayBlock');
});

SignUp.addEventListener('click', function(){
  secondFormWrapper.classList.toggle('Signup-page');
  formWrapper.classList.remove('Login-page');
  mainContainer.classList.toggle('displayBlock');
  
  if (formWrapper.classList.contains('Login-page')) {
    formWrapper.classList.remove('Login-page');
  }
});

const loginLink = document.getElementById('BeLogin');
const signupLink = document.getElementById('beSignup');
const mainContent = document.getElementById('main-content');
const theContainer = document.querySelector('.container');

loginLink.addEventListener('click', function() {
  mainContent.classList.add('login-form-open');
  mainContent.classList.remove('signup-form-open');
});

signupLink.addEventListener('click', function() {
  mainContent.classList.add('signup-form-open');
  mainContent.classList.remove('login-form-open');
});

document.getElementById('signin-form').addEventListener('submit', function() {
  mainContent.classList.remove('login-form-open');
  removeContainerBackgroundColor();
});

document.getElementById('signup-form').addEventListener('submit', function() {
  mainContent.classList.remove('signup-form-open');
  removeContainerBackgroundColor();
});

const rgbaContainerLinks = document.querySelectorAll('.InfoMethod');

// Add event listeners to the links
rgbaContainerLinks.forEach((InfoMethod) => {
  InfoMethod.addEventListener('click', function(event) {
    event.preventDefault();
    toggleContainerBackgroundColor();
  });
});

// Function to toggle the background color of the container
function toggleContainerBackgroundColor() {
  theContainer.classList.toggle('rgba');
}

// Function to remove the background color from the container
function removeContainerBackgroundColor() {
  theContainer.classList.remove('rgba');
}

