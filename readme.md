## Welcome!

### Schedule

* Motivation
* Rx Observable, Observer, Subscription
* Converting things to Observables
* Basic operators
* Debugging techniques
* Subjects and multicasting
* Observable of observables

### Useful links:

* https://github.com/staltz/toy-rx (simplified source code for educational purposes)
* https://github.com/ReactiveX/RxJS (official source code)
* http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html (official docs for Observable & operators)

## Important operators

Creation:

* `create` (low-level)
* `from`
* `interval`
* `fromEvent`
* `fromPromise`
* `of` (alias for `from(array)`)
* `bindNodeCallback`

Transformation:

* `map`
* `scan`

Filtering:

* `filter`
* `take`
* `skip`

Combination:

* `concat` (one after the other)
* `merge` (in parallel, "OR" semantics)
* `combineLatest` (in parallel, "AND" semantics)
* `startWith(x)` (alias for `concat` and `of(x)`)

Multicasting:

* `multicast`
* `publish` (alias for multicast with a Subject)
* `publishBehavior` (alias for multicast with a BehaviorSubject)
* `publishReplay` (alias for multicast with a ReplaySubject)
* `refCount` (only on observables returned from multicast)

Flattening:

* `switch` (concurrency 1, with cancellation)
* `concatAll` (concurrency 1, waits for completion)
* `mergeAll` (infinite concurrency)

Others:

* `do`
* `delay`
