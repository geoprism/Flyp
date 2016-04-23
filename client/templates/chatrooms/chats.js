Template.chats.helpers({
  chatsList: this.title,
  currentUser: function(){
    if(Meteor.users.find().count() != 0)
      return Meteor.user().emails[0].address

    else
      return null;
    }
});
