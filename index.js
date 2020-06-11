//Get my buttons
const buttons = document.querySelectorAll('.btn');
//Adding an eventlistener to each button
buttons.forEach(function (button) {
  button.addEventListener('click');
});
//Declare share function
function share() {
  alert('juliamj.github.io/cookbook');
}