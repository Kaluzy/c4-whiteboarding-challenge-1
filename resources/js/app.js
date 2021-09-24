// 1. GenBuzz Function
function genBuzz(numlist, numhigh) {
  if (numlist > numlist) {
    console.log("error");
  }
  for (let num = numlist; num <= numhigh; num++) {
    if (num % 5 === 0 && num % 3 === 0) {
      console.log("genBuzz");
    } else if (num % 3 === 0) {
      console.log("gen");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
}

genBuzz(5, 9);

// 2. Leap Year
const leapYear = (year) => {
  if (year % 400 == 0) {
    console.log(`${year} is a leap year`);
  } else if (year % 100 == 0) {
    console.log(`${year} is not a leap year`);
  } else if (year % 4 == 0) {
    console.log(`${year} is a leap year!`);
    // console.log(`${year} is not a leap year!`);
  } else if (year % 1 == 0) {
    console.log(`${year} is not a leap year!`);
  } else {
    console.log("Please put in a year");
  }
};
leapYear(2035);
// leapYear(1700);
//Phillips solution
function isLeapYear(year) {
  if (typeof year === "number" && year > 0 && year < 2021) {
    if (year % 400 === 0) {
      return `${year} is a leap year`;
    } else if (year % 4 === 0 && year % 100 !== 0) {
      return `${year} is a leap year`;
    } else return `${year} is a common year`;
  } else return "Please enter a valid year";
}
isLeapYear(2000);

// 3. Perfect Square

const isPerfectSquare = (num) => {
  let i = 1;
  while (i * i <= num) {
    if (i * i !== num) {
      i++;
      continue;
    }
    return "This is a perfect square!";
  }
  return "This is not a perfect square!";
};
console.log(isPerfectSquare(9));
