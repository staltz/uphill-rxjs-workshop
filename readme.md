## Welcome!

### Schedule

* Motivation
* Rx Observable, Observer, Subscription
* Converting things to Observables
* Basic operators
* Debugging techniques
* Subjects and multicasting
* Observable of observables

### Setup

* Install git and clone this repository
* Install Node.js (version 8 or higher) and npm
* Run `npm install`
* Run `node check.js`

### Useful links:

* https://github.com/ReactiveX/RxJS (official source code)
* https://rxjs.dev (official docs)
* https://github.com/staltz/toy-rx (simplified source code for educational purposes)

## Important operators

Creation:

* `create` (low-level)
* `interval`
* `from`
* `fromEvent`
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

* `switchAll` (concurrency 1, with cancellation)
* `concatAll` (concurrency 1, waits for completion)
* `mergeAll` (infinite concurrency)

Others:

* `tap`
* `delay`
