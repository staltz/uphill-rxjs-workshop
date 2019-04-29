const {BehaviorSubject} = require("rxjs");

const subject = new BehaviorSubject();

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

subject.next(1);
subject.next(2);
subject.next(3);

// Age vs Birthdays

/*
0---1---2---3---------------
 0..1...2...3...
                      3.....
*/

setTimeout(function() {
  subject.subscribe(observerB);
  console.log("observerB subscribed");
}, 2000);
