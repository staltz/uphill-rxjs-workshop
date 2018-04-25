const Rx = require("rxjs");

const clickObservable = Rx.Observable.fromEvent(document, "click");

const clockObservable = clickObservable
  .map(click => Rx.Observable.interval(1000))
  .switch();

// flattening
// Observable<Observable<number>> ---> Observable<number>

/*
--------+--------+------------------------
      \        \
       -0-1-2-3 -0-1-2-3-4-5-6

       switch

----------0-1-2-3--0-1-2-3-4-5-6
*/

clockObservable.subscribe(x => console.log(x));
