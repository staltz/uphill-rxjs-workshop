const {interval, Subject} = require('rxjs');
const {tap, multicast, refCount} = require('rxjs/operators');

const shared$ = interval(1000).pipe(
  tap(x => console.log("source " + x)),
  multicast(() => new Subject()),
  refCount(),
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

console.log("subscribed A");
const subA = shared$.subscribe(observerA); // start

const observerB = {
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
  console.log("subscribed B");
  subB = shared$.subscribe(observerB); // 1 => 2
}, 2000);

setTimeout(function() {
  subA.unsubscribe(); // 2 => 1
  console.log("unsubscribed A");
}, 5000);

setTimeout(function() {
  subB.unsubscribe(); // 1 => 0 (stop)
  console.log("unsubscribed B");
}, 7000);
