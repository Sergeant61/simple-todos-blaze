import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

const routes = FlowRouter.group({
  prefix: '/auth',
  name: 'auth',
  // triggersEnter: [MustSignOut],
});

routes.route('/sign-up', {
  name: 'auth.signUp',
  action: function (params, queryParams) {
    this.render('authLayoutDefault', { page: 'authPageSignUp' });
  }
});

routes.route('/sign-in', {
  name: 'auth.signIn',
  action: function (params, queryParams) {
    this.render('authLayoutDefault', { page: 'authPageSignIn' });
  }
});