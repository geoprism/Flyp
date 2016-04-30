Template.signout.events({
  'click': function(){
    Meteor.logout();
    console.log("CLICKED");
    $(".button-collapse").sideNav("hide");
  }
})
