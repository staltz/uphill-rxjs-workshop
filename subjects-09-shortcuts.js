const {interval, Subject} = require('rxjs');
const {tap, publishBehavior, refCount} = require('rxjs/operators');

const shared$ = interval(1000).pipe(
  tap(x => console.log("source " + x)),
  publishBehavior(),
  refCount(),
)

// publish = multicast with Subject
// publishReplay = multicast with ReplaySubject
// publishBehavior = multicast with BehaviorSubject
// share = publish().refCount()

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

const subA = shared$.subscribe(observerA);

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
  subB = shared$.subscribe(observerB);
}, 2000);

setTimeout(function() {
  subA.unsubscribe();
  console.log("unsubscribed A");
}, 5000);

setTimeout(function() {
  subB.unsubscribe();
  console.log("unsubscribed B");
}, 7000);
