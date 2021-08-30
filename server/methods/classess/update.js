import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'classes.update',
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
    class: ClassSchema
  }).validator(),
  run: function (data) {
    this.unblock();

    Classes.update({ _id: data._id }, {
      $set: data.class
    });

  }
});