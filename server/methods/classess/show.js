import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'classes.show',
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id,
  }).validator(),
  run: function (data) {
    this.unblock();

    Classes.findOne({ _id: data._id });

  }
});