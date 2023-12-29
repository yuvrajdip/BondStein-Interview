
function dropDownButton() {

  const x = document.getElementById('dropDown-menu')

  if (x.classList.value.includes('dropDown-list')) {
    x.classList.remove('dropDown-list');
    x.innerHTML=``;
  }
  else {
    x.classList.add('dropDown-list');
    x.innerHTML = `
    <li>Home</li>
  <li>About Us</li>
  <li>Contact</li>
  <li>Services</li>
    `
  }

}