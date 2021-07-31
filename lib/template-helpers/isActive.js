import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

IsActive = function (name, htmlClass) {
  let isActive = false;
  const route = FlowRouter._current.route;

  if (route.name == name || route.name.includes(name)) {
    isActive = true;
  }

  if (isActive) {
    return htmlClass || 'active'
  }
}

Template.registerHelper('isActive', function (value, htmlClass) {
  FlowRouter.watchPathChange();
  return IsActive(value, htmlClass);
});