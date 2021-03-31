"use strict";

height.addEventListener('input', ev => 
{
	document.documentElement.style.setProperty('--height', `${height.value}%`);
});

bg.addEventListener('input', ev => 
{
  document.documentElement.style.setProperty('--bg-colour', bg.value);
});

fg.addEventListener('input', ev => 
{
	document.documentElement.style.setProperty('--fg-colour', fg.value);
});

const checkConfirmation = (ev) => {
if (password.value != confirmation.value) 
{
	confirmation.setCustomValidity("Wait. What? This doesn't match the password field!");
} 
else 
{
	confirmation.setCustomValidity('');
}};

confirmation.addEventListener('input', checkConfirmation);
password.addEventListener('input', checkConfirmation);

login.addEventListener('submit', ev => {
 alert(`logged in as ${user.value}`)
 login.reset();
 ev.preventDefault();
});