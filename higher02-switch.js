const {fromEvent, interval} = require("rxjs");
const {map, switchAll} = require('rxjs/operators');

const click$ = fromEvent(document, "click");

const clock$ = click$.pipe(
  map(click => interval(1000)),
  switchAll(),
);

// flattening
// Observable<Observable<number>> ---> Observable<number>

/*
--------+--------+------------------------
        \        \
         -0-1-2-3 -0-1-2-3-4-5-6

       switchAll

----------0-1-2-3--0-1-2-3-4-5-6
*/

clock$.subscribe(x => console.log(x));
