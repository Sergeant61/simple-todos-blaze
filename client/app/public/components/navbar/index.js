Template.publicComponentNavbar.events({
  'click .brd-logout': function (event, template) {
    event.preventDefault();

    Meteor.logout();

  }
});