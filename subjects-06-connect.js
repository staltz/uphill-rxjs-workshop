const Rx = require("rxjs");

var clock = Rx.Observable
  .interval(1000)
  .take(5)
  .startWith(-1)
  .multicast(() => new Rx.ReplaySubject(100))
  .refCount();

var observerA = {
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
const subA = clock.subscribe(observerA);

var observerB = {
  next: function(x) {
    console.log("          B next " + x);
  },
  error: function(err) {
    console.log("          B error " + err);
  },
  complete: function() {
    console.log("          B done");
  }
};

let subB;
setTimeout(function() {
  console.log("B subscribed");
  subB = clock.subscribe(observerB);
}, 2000);

setTimeout(() => {
  // console.log("both unsubscribe");
  // subA.unsubscribe();
  // subB.unsubscribe();
}, 3500);
