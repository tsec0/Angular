import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

// async analogy
// const pAsPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(1200);
//   }, 4000);
// });
// pAsPromise.then((data) => console.log('promise',  data)).then().then();
// Promise.resolve(100).then((d) => d * 1.2).then((x) => console.log(x));

// sync analogy Promise
// [1].map((x) => x * 2).map((x) => x * 10);
// sync analogy Observeble
// [1, 2, 3, 4].map((x) => x * 2).map((x) => x * 10);

function interval(intervalValue: number) {

    return new Observable<number>((observer) => {
      // observer.next(1000);
      // observer.next(2000);
      // observer.next(3000);
      let counter = 0;
      const interval = setInterval(() => { 
        observer.next(counter++); 
      }, intervalValue);
  
      // this code is invoked on destroy
      return () => {
        clearInterval(interval);
      };
    });
  }
  
  const stream$ = interval(4000).pipe(map((x) => x * 2)); // rxjs
  
  setTimeout(() => {
    stream$.subscribe({
      next: (x) => console.log('data ', x),
      error: (err) => console.log(`Error occured: ${err}!`),
      complete: () => console.log('Stream has been completed'),
    });
  }, 3000);
  