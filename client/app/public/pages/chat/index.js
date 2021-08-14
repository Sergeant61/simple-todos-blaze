Template.publicPageChat.onCreated(function () {
  this.state = new ReactiveDict(null, {
    room: null
  });
});

Template.publicPageChat.helpers({
  rooms: function () {
    return Rooms.find({}).fetch();
  },
  messages: function () {
    return Messages.find({}).fetch();
  }
});

Template.publicPageChat.onRendered(function () {
  const self = this;

  this.autorun(function () {
    const room = self.state.get('room');

    if (!room) {
      return;
    }

    self.subscribeId =  Meteor.subscribe('messages.list', room._id);

  });
});

Template.publicPageChat.events({
  'submit form#brdPublicPageChatRoomCreateForm': function (event, template) {
    event.preventDefault();

    const name = event.target.name.value;

    const obj = {
      room: {
        name: name,
      }
    }

    Meteor.call('rooms.create', obj, function (error, result) {
      if (error) {
        ErrorHandler.show(error);
        return;
      }

      event.target.reset();
    });
  },
  'submit form#brdPublicPageChatMessageCreateForm': function (event, template) {
    event.preventDefault();

    const message = event.target.message.value;
    const room = template.state.get('room');

    const obj = {
      message: {
        roomId: room._id,
        // userId: userId,
        message: message,
      }
    }

    Meteor.call('messages.create', obj, function (error, result) {
      if (error) {
        console.log('error', error);
      }

      event.target.reset();
    });
  },
  'click .brd-select-room': function (event, template) {
    event.preventDefault();

    console.log(this);
    template.state.set('room', this);

  }
});

Template.publicPageChat.onDestroyed(function() { 
   this.subscribeId?.stop()
});