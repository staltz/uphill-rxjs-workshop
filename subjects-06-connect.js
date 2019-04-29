const {interval, Subject} = require('rxjs');
const {take, startWith, multicast} = require('rxjs/operators');

const clock$ = interval(1000).pipe(
  take(5),
  startWith(-1),
  multicast(() => new Subject()),
);

const observerA = {
  next: function(x) {
    console.log("A next " + x);
  },
  error: function(err) {
    console.log("A error " + err);
  },
  complete: function() {
    console.log("A done");
  }
};

console.log("A subscribed");
const subA = clock$.subscribe(observerA);

console.log('connect the clock$');
clock$.connect();

const observerB = {
  next: function(x) {
    console.log("\t\tB next " + x);
  },
  error: function(err) {
    console.log("\t\tB error " + err);
  },
  complete: function() {
    console.log("\t\tB done");
  }
};

let subB;
setTimeout(function() {
  console.log("\t\tB subscribed");
  subB = clock$.subscribe(observerB);
}, 2000);

setTimeout(() => {
  // console.log("A unsubscribed");
  // subA.unsubscribe();
  // console.log("\t\tB unsubscribed");
  // subB.unsubscribe();
}, 3500);
