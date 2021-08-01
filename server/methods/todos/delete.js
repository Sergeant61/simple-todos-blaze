import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'todos.delete',
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id
  }).validator(),
  run: function (data) {
    this.unblock();

    return Todos.remove({ _id: data._id });
  }
});