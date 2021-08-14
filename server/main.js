import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Migrations.migrateTo('latest');

  // code to run on server at startup
});
