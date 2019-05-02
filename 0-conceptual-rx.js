const observable = {
  subscribe: function(observer) {
    console.log('subscribe was called');
    const ref = setTimeout(() => {
      observer.next(10);
      observer.complete();
    },1000);

    const subscription = {
      unsubscribe: function () {
        clearTimeout(ref);
      }
    }

    return subscription;
  },
};

const observer = {
  next: x => {
    console.log(x);
  },
  error: e => {},
  complete: () => {
    console.log('done');
  },
};

console.log('before')
observable.subscribe(observer);
console.log('after')

// Cold subscribe means:
// trigger an execution that gives multiple async outputs

// Hot subscribe means:
// follow an existing execution that gives multiple async outputs





