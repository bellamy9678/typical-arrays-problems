
exports.min = function min (array) {
  
  let elem = 0;

  if (arguments.length != 1 || array.length == 0) {
    return elem;
  } else {
    elem = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < elem) {
        elem = array[i];
      };
    }
  }
  return elem;
}

exports.max = function max (array) {
  let elem = 0;

  if (arguments.length != 1 || array.length == 0) {
    return elem;
  } else {
    elem = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > elem) {
        elem = array[i];
      };
    }
  }
  return elem;
}

exports.avg = function avg (array) {
  let elem = 0;

  if (arguments.length != 1 || array.length == 0) {
    return elem;
  } else {
    for (let i = 0; i < array.length; i++) {
      elem += array[i];
    }
  }
  return elem/array.length;
}
