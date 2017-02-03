"use strict";

var _loop = function _loop(i) {
  setTimeout(function () {
    return console.log(i);
  });
};

// import 'babel-polyfill';
// var newArr = Array.from({
//     1: "a",
//     2: "b",
//     3: "c",
//     length: 3
// })


for (var i = 0; i < 5; i++) {
  _loop(i);
}
