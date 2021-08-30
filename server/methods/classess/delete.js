import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'classes.delete',
  validate: new SimpleSchema({
    _id: SimpleSchema.RegEx.Id
  }).validator(),
  run: function (data) {
    this.unblock();

    return Classes.remove({ _id: data._id });
  }
});