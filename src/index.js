
exports.min = function min (array) {
  if (array == undefined || array[0] == undefined) {
      return 0;
  }
  else {
      let arrSort = array.sort(function(a, b){return a - b});
      return arrSort[0];
  }
}

exports.max = function max (array) {
  if (array == undefined || array[0] == undefined) {
      return 0;
  }
  else {
      let arrSort = array.sort(function(a, b){return a - b});
      return arrSort[array.length - 1];
  }
}

exports.avg = function avg (array) {
  if (array == undefined || array[0] == undefined) {
      return 0;
  }
  else {
      let arrAvg = 0;
      for (let i = 0; i < array.length; i++) {
          arrAvg += array[i];
      }
      return arrAvg = arrAvg/array.length;
  }
}
