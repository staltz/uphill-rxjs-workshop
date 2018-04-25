const Rx = require("rxjs");

var connectableObservable = Rx.Observable
  .interval(1000)
  .do(x => console.log("source " + x))
  .multicast(new Rx.Subject());

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

var sub = connectableObservable.connect(); // start

var subA = connectableObservable.subscribe(observerA);

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
  subB = connectableObservable.subscribe(observerB);
}, 2000);

setTimeout(function() {
  sub.unsubscribe(); // stop
  console.log("unsubscribed shared execution");
}, 5000);
