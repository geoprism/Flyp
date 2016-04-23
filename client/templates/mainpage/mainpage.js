Template.mainpage.helpers({
  directory: function(){
    return Meteor.users.find()
  }
});
