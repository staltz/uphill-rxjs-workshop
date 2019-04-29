const {interval, Subject} = require("rxjs");
const {take} = require('rxjs/operators');

const observable = interval(1000).pipe(take(5));

const subject = new Subject();

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

observable.subscribe(subject);

subject.subscribe(observerA);

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

setTimeout(function() {
  subject.subscribe(observerB);
}, 2000);
