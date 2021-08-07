Meteor.publish('messages.list', function (roomId) {
  return Messages.find({ roomId: roomId });
});