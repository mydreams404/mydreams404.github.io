let darkMode=localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('.lightToggle');

//check if dark mode is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

const enableDarkMode = () => {
  //1. add class darkmode to the body
  document.body.classList.add('dark');
  //2. update darkmode in the localStorage
  localStorage.setItem('darkMode', 'enabled') ;
};

const disableDarkMode = () => {
  //1. add class darkmode to the body
  document.body.classList.remove('dark');
  //2. update darkmode in the localStorage
  localStorage.setItem('darkMode', null) ;
};

if(darkMode == 'enabled'){
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if(darkMode !== "enabled"){
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

//////////////////OLD CODE
// document.querySelector('.lightToggle').addEventListener('click', () => {
//   document.body.classList.toggle('dark')
// })
