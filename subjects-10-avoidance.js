const Rx = require("rxjs");

/**
 * Exercise: refactor the following code so it doesn't have any use of Subjects.
 */

const subject = new Rx.Subject();

document.addEventListener("click", function(ev) {
  subject.next(1);
});

fetch("https://jsonplaceholder.typicode.com/users/0")
  .then(res => res.json())
  .then(data => {
    subject.next(1);
  });

const count$ = subject.scan((acc, x) => acc + x, 0);

count$.subscribe(function(x) {
  console.log(x);
});
