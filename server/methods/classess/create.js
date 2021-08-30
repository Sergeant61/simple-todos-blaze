import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'classes.create',
  validate: new SimpleSchema({
    class: ClassSchema
  }).validator(),
  run: function (data) {
    this.unblock();

    return Classes.insert(data.class);
  }
});