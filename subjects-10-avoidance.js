const {Subject} = require("rxjs");

/**
 * Exercise: refactor the following code so it doesn't have any use of Subjects.
 */

const subject = new Subject();

document.addEventListener("click", () => {
  subject.next(1);
});

fetch("https://jsonplaceholder.typicode.com/users/0")
  .then(res => res.json())
  .then(() => {
    subject.next(1);
  });

const count$ = subject.scan((acc, x) => acc + x, 0);

count$.subscribe(function(x) {
  console.log(x);
});
