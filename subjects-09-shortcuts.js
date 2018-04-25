const Rx = require("rxjs");

var shared = Rx.Observable
  .interval(1000)
  .do(x => console.log("source " + x))
  .publishBehavior()
  .refCount();

// publish = multicast + Subject
// publishReplay = multicast + ReplaySubject
// publishBehavior = multicast + BehaviorSubject
// share = publish().refCount()

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

var subA = shared.subscribe(observerA);

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
  subB = shared.subscribe(observerB);
}, 2000);

setTimeout(function() {
  subA.unsubscribe();
  console.log("unsubscribed A");
}, 5000);

setTimeout(function() {
  subB.unsubscribe();
  console.log("unsubscribed B");
}, 7000);
