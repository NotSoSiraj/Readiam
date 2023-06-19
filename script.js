let BeLogin = document.getElementById('BeLogin');
let formWrapper = document.querySelector('.formWrapper');
let SignUp = document.getElementById('beSignup');
let secondFormWrapper = document.querySelector('.SecondformWrapper');
let mainContainer = document.querySelector('.container')

BeLogin.addEventListener('click', function () {
  formWrapper.classList.toggle('Login-page');
  secondFormWrapper.classList.remove('Signup-page');
  mainContainer.classList.toggle('displayBlock');
});

SignUp.addEventListener('click', function () {
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
const formWrapperTwo = document.querySelector('.formWrapper');


loginLink.addEventListener('click', function () {
  mainContent.classList.add('login-form-open');
  mainContent.classList.remove('signup-form-open');
});

signupLink.addEventListener('click', function () {
  mainContent.classList.add('signup-form-open');
  mainContent.classList.remove('login-form-open');
});

document.getElementById('signin-form').addEventListener('submit', function () {
  mainContent.classList.remove('login-form-open');
  theContainer.classList.remove('displayBlock');
  removeContainerBackgroundColor();
});

document.getElementById('signup-form').addEventListener('submit', function () {
  mainContent.classList.remove('signup-form-open');
  removeContainerBackgroundColor();
});

const rgbaContainerLinks = document.querySelectorAll('.InfoMethod');

// Add event listeners to the links
rgbaContainerLinks.forEach((InfoMethod) => {
  InfoMethod.addEventListener('click', function (event) {
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
let darkMode = document.getElementById('dark');
let body = document.getElementById('main-content');
let anchorLinks = document.querySelectorAll("a");
let buttons = document.querySelectorAll("button");

darkMode.addEventListener('click', function () {
  body.classList.toggle('darkk');
 
  let articles = document.querySelectorAll(".article");
  let profileDiv = document.querySelectorAll(".profile-div");
  let paraDark = document.querySelectorAll(".textStyle");
  let darkToggle = document.querySelector(".toggle-nav");
  let darkAnchor = document.querySelectorAll(".anchorWhiteTwo");
  let textHeading = document.querySelectorAll('.headingText');
  let paraMain = document.getElementById('mainPara');
  let details = document.querySelector('.details');
  let iLinks = document.querySelectorAll("i")
  let spanPara = document.querySelectorAll(".span-para");
  let lookProfile = document.querySelector(".profileLook");
  let commentText = document.querySelectorAll(".comment-text");

  darkToggle.classList.toggle('darkToggle');
  
  articles.forEach(function (article) {
    article.classList.toggle('darkArticle');
  });

  profileDiv.forEach(function (profile) {
    profile.classList.toggle('darkProfile');
  });

  paraDark.forEach(function (para) {
    para.classList.toggle('paraDark');
  });

  darkAnchor.forEach(function (anchor) {
    anchor.classList.toggle('darkAnchor');
  });

  buttons.forEach(function (button) {
    button.classList.toggle("blackMode");
  });

  textHeading.forEach(function (heading) {
    heading.classList.toggle('whiteHead');
  });

  spanPara.forEach(function (span) {
    span.classList.toggle('spanWhitePara');
  });

  commentText.forEach(function (comment) {
    comment.classList.toggle('whiteComment');
  });

  lookProfile.classList.toggle("whiteProfile");
  paraMain.classList.toggle('whitePara');
  details.classList.toggle('whiteDetails');

  anchorLinks.forEach(function (link) {
    link.classList.toggle("anchorWhite");
    link.classList.toggle("darkAnchor");
  });
});







