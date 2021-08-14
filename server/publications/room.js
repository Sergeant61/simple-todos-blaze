Meteor.publish(null, function () {
  if (Meteor.userId()) {
    return Rooms.find({});
  }
});

Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  } else {
    this.ready()
  }
});