const Rx = require("rxjs");

/**
 * Exercise: use Observable.create to deliver to the observer all the items
 * in an array, essentially implementing Observable.from(array)
 */

function fromArray(arr) {
  return Rx.Observable.create(function subscribe(observer) {
    arr.forEach(function(element) {
      observer.next(element);
    });
    observer.complete();
  });
}

var arrObs = fromArray([1, 2, 3, 4, 5]);

arrObs.subscribe({
  next: x => console.log(x),
  error: e => console.error(e),
  complete: () => console.log("complete")
});
