const {fromEvent, interval} = require("rxjs");
const {map, take, concatAll} = require('rxjs/operators');

const click$ = fromEvent(document, "click");

const clock$ = click$.pipe(
  map(click => interval(1000).pipe(take(5))),
  concatAll(),
);

// flattening
// Observable<Observable<number>> ---> Observable<number>

/*
--------+--------+--------+--------------
        \
         -0-1-2-3-4|

       concatAll

----------0-1-2-3-4--0-1-2-3-4--0-1-2-3-4
*/

clock$.subscribe(x => console.log(x));
