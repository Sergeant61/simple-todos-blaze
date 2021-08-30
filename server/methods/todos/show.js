import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'todos.show',
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
  }).validator(),
  run: function (data) {
    this.unblock();

    Todos.findOne({ _id: data._id });

  }
});