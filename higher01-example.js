const Rx = require("rxjs");

const clickObservable = Rx.Observable.fromEvent(document, "click");

const clockObservable = clickObservable.map(click =>
  Rx.Observable.interval(1000)
);

clockObservable.subscribe(clock => clock.subscribe(x => console.log(x)));
