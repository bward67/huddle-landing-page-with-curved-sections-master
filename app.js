const input = document.querySelector(".btns-container input");
console.log(input);
const errorText = document.querySelector(".error-text");
console.log(errorText);
const subscribeBtn = document.querySelector(".btns-container .dark-btn");
console.log(subscribeBtn);

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = input.value.trim();
  if (input === "") {
    errorText.classList.add("active");
    //errorText.innerHTML = "Check your email please";
    input.style.borderColor = "red";
  } else if (!isValidEmail(inputValue)) {
    //I would do this but that is not what they asked for
    //errorText.innerHTML = "Please enter a valid email address";
    errorText.classList.add("active");
    input.style.borderColor = "red";
  } else {
    errorText.classList.remove("active");
    input.style.borderColor = "hsl(192, 100%, 9%)";
  }
});
