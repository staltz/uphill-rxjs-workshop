const {fromEvent, interval} = require("rxjs");
const {map} = require('rxjs/operators')

const click$ = fromEvent(document, "click");

const clock$ = click$.pipe(
  map(click => interval(1000)),
);

clock$.subscribe(clock => clock.subscribe(x => console.log(x)));
