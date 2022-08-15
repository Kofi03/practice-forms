// TODO : log the from submission
// TODO: Select the form element form the HTML
const form = document.querySelector("form"); // document is a reference to the page
// DOM: document object module
// console
console.log(localStorage.getItem("username"));

form.addEventListener("submit", (itHappened) => {
  itHappened.preventDefault();
  const submission = Object.fromEntries(new FormData(itHappened.target));
  console.log(submission);

  if (Object.keys(submission).includes("saveUsername")) {
    localStorage.setItem("username", submission.username);
  }
});
