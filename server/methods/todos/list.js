import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'todos.list',
  validate: function () { },
  run: function (data) {
    this.unblock();

    return Todos.find({}).fetch();
  }
});