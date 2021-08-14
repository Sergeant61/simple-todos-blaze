Meteor.publish('messages.list', function (roomId) {
  if (Meteor.userId()) {
    return Messages.find({ roomId: roomId });
  }
});