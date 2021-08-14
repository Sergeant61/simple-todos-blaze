import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Accounts.onLogout(function (data) {
  FlowRouter.go('public.home');
});