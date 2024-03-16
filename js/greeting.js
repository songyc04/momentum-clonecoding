const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (e) => {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
};

const paintGreetings = (username) => {
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    greeting.innerText = `Good Morning, ${username}.`;
  }
  else if ((hours >= 12) && (hours < 18)){
    greeting.innerText = `Good Afternoon, ${username}.`;
  }
  else if ((hours >= 18) && (hours < 21)){
    greeting.innerText = `Good Evening, ${username}.`;
  }
  else {
    greeting.innerText = `Good Night, ${username}.`;
  }
  
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
else {
  paintGreetings(savedUsername);
}