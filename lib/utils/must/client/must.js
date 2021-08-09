MustSignIn = function(context, redirect, stop) {
  if(!Meteor.userId()) {
    redirect('/auth/signin');
    stop();
  }
}

MustSignOut = function(context, redirect, stop) {
  if(Meteor.userId()) {
    redirect('/account');
    stop();
  }
}