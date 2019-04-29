const {interval, Subject} = require('rxjs');
const {tap, multicast} = require('rxjs/operators');

const connectableObservable = interval(1000).pipe(
  tap(x => console.log("source " + x)),
  multicast(new Subject()),
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

const sub = connectableObservable.connect(); // start

const subA = connectableObservable.subscribe(observerA);

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
  subB = connectableObservable.subscribe(observerB);
}, 2000);

setTimeout(function() {
  sub.unsubscribe(); // stop
  console.log("unsubscribed shared execution");
}, 5000);
