Template.chats.helpers({
  currentUser: function(){
    return Meteor.user().emails[0].address
},
  time: function(){
      return moment(this.timestamp).format('h:mm a');
  }
});
