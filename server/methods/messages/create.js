import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
  name: 'messages.create',
  validate: new SimpleSchema({
    message: MessageSchema.omit('userId')
  }).validator(),
  run: function (data) {
    this.unblock();

    data.message.userId = Meteor.userId();

    return Messages.insert(data.message);
  }
});