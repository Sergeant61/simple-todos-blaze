import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
  name: 'public.home',
  action: function (params, queryParams) {
    this.render('publicLayoutDefault', { page: 'publicPageHome' });
  }
});

FlowRouter.route('/todos', {
  name: 'public.todos',
  action: function (params, queryParams) {
    this.render('publicLayoutDefault', { page: 'publicPageTodos' });
  }
});

FlowRouter.route('/about', {
  name: 'public.about',
  action: function (params, queryParams) {
    this.render('publicLayoutDefault', { page: 'publicPageAbout' });
  }
});

FlowRouter.route('/chat', {
  name: 'public.chat',
  action: function (params, queryParams) {
    this.render('publicLayoutDefault', { page: 'publicPageChat' });
  }
});