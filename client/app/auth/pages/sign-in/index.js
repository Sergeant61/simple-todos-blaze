import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.authPageSignIn.events({
  'submit form': function (event, template) {
    event.preventDefault();
    const emailAddress = event.target.emailAddress.value;
    const password = event.target.password.value;

    Loading.show();
    Meteor.loginWithPassword(emailAddress, password, function (error) {
      Loading.hide();

      if (error) {
        console.log(error);
        return;
      }

      const redirect = FlowRouter.getQueryParam('redirect');

      if (redirect) {
        FlowRouter.go(redirect);
      } else {
        FlowRouter.go('public.home');
      }
    });
  }
});