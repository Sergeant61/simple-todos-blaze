Template.registerHelper('multiply', function (a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    return 0;
  }
  return a * b;
});