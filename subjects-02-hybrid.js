const Rx = require("rxjs");

var observable = Rx.Observable.interval(1000).take(5);

var subject = new Rx.Subject();

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

observable.subscribe(subject);

subject.subscribe(observerA);

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

setTimeout(function() {
  subject.subscribe(observerB);
}, 2000);
