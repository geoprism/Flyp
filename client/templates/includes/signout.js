Template.signout.events({
  'click': function(){
    Meteor.logout();
    Router.go('/');
  }

})
