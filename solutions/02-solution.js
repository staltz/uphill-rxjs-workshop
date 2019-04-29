const {Observable} = require("rxjs");

/**
 * Exercise: use Observable.create to deliver to the observer all the items
 * in an array, essentially implementing Observable.from(array)
 */

function fromArray(arr) {
  return Observable.create(function subscribe(observer) {
    for (let x of arr) {
      observer.next(x);
    }
    observer.complete();
  });
}

var arr$ = fromArray([1, 2, 3, 4, 5]);

arr$.subscribe({
  next: x => console.log(x),
  error: e => console.error(e),
  complete: () => console.log("complete")
});
