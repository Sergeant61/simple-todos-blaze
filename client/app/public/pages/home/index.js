Template.publicPageHome.onCreated(function () {
  this.state = new ReactiveDict(null, {
    todos: []
  });
});

Template.publicPageHome.helpers({
  enes: function () {
    return 'Enes'
  }
});

Template.publicPageHome.onRendered(function () {
  const self = this;

  this.autorun(function () {
    AppUtil.refreshTokens.get('todos');

    Meteor.call('todos.list', {}, function (error, result) {
      if (error) {
        console.log('error', error);
      }
      if (result) {

        console.log(result);
        self.state.set('todos', result);
      }
    });
  });
});

Template.publicPageHome.events({
  'click #event': function (event, template) {
    console.log(template);

  }
});

Template.publicPageHome.onDestroyed(function () {

});