const Rx = require("rxjs");

const clickObservable = Rx.Observable.fromEvent(document, "click");

const clockObservable = clickObservable
  .map(click => Rx.Observable.interval(1000).take(5))
  .concatAll();

// flattening
// Observable<Observable<number>> ---> Observable<number>

/*
--------+--------------+-+----
      \
       -0-1-2-3-4|

       concatAll

----------0-1-2-3-4-----0-1-2-3-4--0-1-2-3-4
*/

clockObservable.subscribe(x => console.log(x));
