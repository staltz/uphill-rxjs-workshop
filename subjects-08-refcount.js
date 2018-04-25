const Rx = require("rxjs");

var shared = Rx.Observable
  .interval(1000)
  .do(x => console.log("source " + x))
  .multicast(new Rx.Subject())
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

console.log("subscribed A");
var subA = shared.subscribe(observerA); // start

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

var subB;
setTimeout(function() {
  console.log("subscribed B");
  subB = shared.subscribe(observerB); // 1 => 2
}, 2000);

setTimeout(function() {
  subA.unsubscribe(); // 2 => 1
  console.log("unsubscribed A");
}, 5000);

setTimeout(function() {
  subB.unsubscribe(); // 1 => 0 (stop)
  console.log("unsubscribed B");
}, 7000);
