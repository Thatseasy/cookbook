//Get my buttons
const buttons = document.querySelectorAll('.btn');
//Adding an eventlistener to each button
buttons.forEach(function (button) {
  button.addEventListener('click', share);
});
//Declare share function
function share() {
  alert('SHARE');
}
