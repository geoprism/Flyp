Template.chats.helpers({
  time: function(){
      return moment(this.timestamp).format('h:mm a');
  },
  yours: function(){
    return this.author === Meteor.user().emails[0].address;
  }
});
