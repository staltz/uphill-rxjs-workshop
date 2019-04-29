const {Subject} = require("rxjs");

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

subject.next(1);
subject.next(2);
subject.next(3);
