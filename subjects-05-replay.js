const {ReplaySubject} = require("rxjs");

const subject = new ReplaySubject(100);

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

subject.subscribe(observerA);
console.log("observerA subscribed");

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

setTimeout(() => subject.next(1), 100);
setTimeout(() => subject.next(2), 200);
setTimeout(() => subject.next(3), 300);
setTimeout(() => subject.complete(), 350);

setTimeout(function() {
  subject.subscribe(observerB);
  console.log("observerB subscribed");
}, 400);
