Meteor.publish(null, function () {
  return Rooms.find({});
});