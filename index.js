// Code your solution in this file!

 
const drivers = ['Alice', 'Bob', 'Charlie', 'Dave'];

function returnFirstTwoDrivers(driversArray) {
  return driversArray.slice(0, 2);
}

function returnLastTwoDrivers(driversArray) {
  return driversArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// You can invoke the first function from selectingDrivers like this:
const firstTwoDrivers = selectingDrivers[0](drivers);
console.log(firstTwoDrivers); // Output: ['Alice', 'Bob']

// You can invoke the second function from selectingDrivers like this:
const lastTwoDrivers = selectingDrivers[1](drivers);
console.log(lastTwoDrivers); // Output: ['Charlie', 'Dave']
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    }
  }
  
  function fareDoubler(fare) {
    return fare * 2;
  }
    
  function fareTripler(fare) {
    return fare * 3;
  }
  

  function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    }
  }
   
  function selectDifferentDrivers(arrayOfDrivers, fn) {
    if (fn === returnFirstTwoDrivers) {
      return arrayOfDrivers.slice(0, 2);
    } else if (fn === returnLastTwoDrivers) {
      return arrayOfDrivers.slice(-2);
    }
  }
  