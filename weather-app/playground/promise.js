var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Args are not numbers");
      }
    }, 1500);
  });
};

asyncAdd("a", 2)
  .then(res => {
    console.log(res);
    return asyncAdd(res, 33); //return to chain promises
  })
  .then(
    //if resolve hits, then it returns new promise
    res => {
      console.log(res);
    }
  )
  .catch(errorMessage => {
    console.log(errorMessage);
  });

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve("Hey, it worked!");
//     reject("unable to fulfill promise");
//   }, 2500);
// });

// somePromise.then(
//   message => {
//     console.log("Success", message);
//   },
//   errorMessage => {
//     console.log("Error: ", errorMessage);
//   }
// );
