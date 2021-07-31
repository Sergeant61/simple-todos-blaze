function splitArrayEvenly(array, n) {
  array = array.slice();
  let result = [];
  while (array.length) {
    result.push(array.splice(0, Math.ceil(array.length / n--)));
  }
  return result;
}

Template.registerHelper('groupArray', function(arr, n) {
  return splitArrayEvenly(arr, n);
});