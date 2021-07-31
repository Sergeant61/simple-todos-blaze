import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.registerHelper('flowRouter', function() {
  return FlowRouter;
});