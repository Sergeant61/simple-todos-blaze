MustSignIn = function(context, redirect, stop) {
  if(!Meteor.userId()) {
    redirect(`/auth/sign-in?redirect=${encodeURI(context.path)}`);
    stop();
  }
}

MustSignOut = function(context, redirect, stop) {
  if(Meteor.userId()) {
    redirect('/account');
    stop();
  }
}