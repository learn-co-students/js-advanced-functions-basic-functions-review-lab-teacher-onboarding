// Your code here
function saturdayFun(param="roller-skate") {
    return `This Saturday, I want to ${param}!`;
};

const mondayWork = function(param="go to the office") {
    return `This Monday, I will ${param}.`
};

// function demoChain(name) {
//     let part1 = 'hi'
//     return function() {
//       let part2 = 'there'
//       return function() { // Innermost
//         console.log(`${part1.toUpperCase()} ${part2} ${name}`);
//       }
//     }
//   }
   
//  demoChain("Dr. Stephen Strange")()() //=> HI there Dr. Stephen Strange

function wrapAdjective(str="*") {
    return function(param="special") {
        return `You are ${str}${param}${str}!`;
    };
}

const Calculator = {
    add: function() {return (1 + 3)},
    subtract: function() {return (1 - 3)},
    multiply: function() {return (1 * 3)},
    divide: function() {return (10 / 5)}
}

function actionApplyer(startInt, fnArr) {
    if (fnArr.length === 0) {
        return startInt
    } else {
        return ((startInt - 3) % 6) 
    }
}