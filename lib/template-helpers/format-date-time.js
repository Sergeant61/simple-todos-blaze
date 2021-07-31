Template.registerHelper('formatDateTime', function (a) {
  return a ? moment(a).format('DD/MM/YYYY - HH:mm:ss') : "~";
});

Template.registerHelper('formatDateTimeLocal', function (a) {
  return a ? moment(a).format('YYYY-MM-DDTHH:mm') : "~";
});

Template.registerHelper('formatDateShort', function (a) {
  return a ? moment(a).format('DD/MM - HH:mm') : "~";
});

Template.registerHelper('formatDate', function (a) {
  return a ? moment(a).format('DD/MM/YYYY') : "~";
});

Template.registerHelper('formatDateForInput', function (a) {
  return a ? moment(a).format('YYYY-MM-DD') : "~";
});