import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'todos.list',
  validate: new SimpleSchema({
    options: {
      type: QueryOptionsSchema,
      optional: true,
    }
  }).validator(),
  run: function (data) {
    this.unblock();

    const { options } = data;

    return Fetch(Todos, {}, options, 'todos');

    return Todos.find({}).fetch();



  }
});