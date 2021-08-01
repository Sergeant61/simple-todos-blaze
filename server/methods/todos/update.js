import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'todos.update',
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
    todo: TodoSchema
  }).validator(),
  run: function (data) {
    this.unblock();

    Todos.update({ _id: data._id }, {
      $set: data.todo
    });

  }
});