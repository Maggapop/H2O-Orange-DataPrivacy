
const togglebutton = document.getElementById('darkmode-btn')
togglebutton.addEventListener('click', () => myFunction())

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}