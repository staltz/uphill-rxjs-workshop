const {fromEvent, interval} = require("rxjs");
const {map, mergeAll} = require('rxjs/operators');

const click$ = fromEvent(document, "click");

const clock$ = click$.pipe(
  map(click => interval(1000)),
  mergeAll(),
);

// flattening
// Observable<Observable<number>> ---> Observable<number>

/*
--------+--------+------------------------
        \        \
         -0-1-2-3 -0-1-2-3-4-5-6

       mergeAll

----------0-1-2-3-405162738495...
*/

clock$.subscribe(x => console.log(x));
