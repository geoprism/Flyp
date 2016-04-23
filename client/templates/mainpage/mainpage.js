Template.mainpage.helpers({
  directory: function(){
    return Meteor.users.find()
  },
  chatrooms_list: function(){
    return Chatrooms.find()
  }
});
