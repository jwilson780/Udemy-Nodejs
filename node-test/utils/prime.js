var primeBirthday = input => {
  var idCount = 0;
  var totalYears = input[input.length - 1]; //assuming this is a number (if not just parse)
  var startDate = stringToDateObject(input[input.length - 2]); //second to last is start date
  var users = [];
  input.pop();
  input.pop();
  input
    .filter(n => {
      if (typeof n === "string") {
        return n;
      }
    })
    .map(n => {
      var user = {
        id: 0,
        birthday: {
          month: 0,
          day: 0,
          year: 0
        },
        currentAge: 0
      };
      user.id = idCount++;
      user.birthday = stringToDateObject(n);
      user.currentAge = initalAge(startDate, user.birthday);
      users.push(user);
    });

  users.sort(function(x, y) {
    return (
      x.birthday.month - y.birthday.month || x.birthday.day - y.birthday.day
    );
  }); //sorted user array
  for (let i = 0; i < totalYears; ++i) {
    users.forEach(element => {
      element.currentAge++;
      if (isPrime(users)) {
        users.forEach(x => {
          console.log(x.currentAge);
        });
      }
    });
  }
};

var stringToDateObject = dateString => {
  var date = {
    month: 0,
    day: 0,
    year: 0
  };
  var stringArray = dateString.split("-");
  stringArray.map(n => parseInt(n));
  date.month = stringArray[1];
  date.day = stringArray[0];
  date.year = stringArray[2];
  return date;
};

var initalAge = (startDate, birthday) => {
  // let start = stringToDateObject(startDate);
  // let birth = stringToDateObject(birthday);
  let maxAge = startDate.year - birthday.year;
  return startDate.month - birthday.month < 0 &&
    startDate.day - birthday.day < 0
    ? maxAge
    : --maxAge;
};

var isPrime = users => {
  let primeAges = users.map(n => n.currentAge).filter(n => {
    var factor = false;
    for (let x = 2; x < Math.sqrt(n); ++x) {
      if (n % x === 0) {
        factor = true;
      }
    }
    if (factor === false) {
      return n;
    }
  });
  console.log(primeAges.length === users.length);
  return primeAges.length === users.length;
};
//isPrime([2, 5, 7, 10, 15]);

primeBirthday([3, "20-06-1994", "09-09-1981", "02-01-1992", "01-09-2014", 5]);
