var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

var pi = 3.14

var adder = function(a,b){
  return `the sum of the two numbers is ${a+b}`;
};


console.log(counter(['bill', 'mike', 'kevin']));

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
